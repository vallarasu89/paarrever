import {
  Advertisement,
  AdvertisementFilter,
  AdvertisementStats,
  HomepageAdSectionConfig,
} from '@/types/advertisement';
import {
  INITIAL_ADVERTISEMENTS,
  INITIAL_HOMEPAGE_SECTIONS,
} from '@/data/advertisements';

const STORAGE_KEY_ADS = 'paarr_ever_ads_v1';
const STORAGE_KEY_SECTIONS = 'paarr_ever_home_sections_v1';

class AdvertisementService {
  private listeners: Set<() => void> = new Set();

  private getStoredAds(): Advertisement[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_ADS);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    return INITIAL_ADVERTISEMENTS;
  }

  private saveAds(ads: Advertisement[]): void {
    try {
      localStorage.setItem(STORAGE_KEY_ADS, JSON.stringify(ads));
    } catch {
      // Storage unavailable or quota exceeded
    }
    this.notify();
  }

  private getStoredSections(): HomepageAdSectionConfig[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY_SECTIONS);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // Fallback
    }
    return INITIAL_HOMEPAGE_SECTIONS;
  }

  private saveSections(sections: HomepageAdSectionConfig[]): void {
    try {
      localStorage.setItem(STORAGE_KEY_SECTIONS, JSON.stringify(sections));
    } catch {
      // Storage unavailable
    }
    this.notify();
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(): void {
    this.listeners.forEach((listener) => {
      try {
        listener();
      } catch (err) {
        console.error('Notification error in AdvertisementService:', err);
      }
    });
  }

  // --- Advertisements CRUD ---

  public async getAdvertisements(filter?: AdvertisementFilter): Promise<Advertisement[]> {
    let ads = this.getStoredAds();

    if (!filter) return ads;

    if (filter.search) {
      const q = filter.search.toLowerCase().trim();
      ads = ads.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.heading.toLowerCase().includes(q) ||
          a.campaignName.toLowerCase().includes(q) ||
          (a.description && a.description.toLowerCase().includes(q))
      );
    }

    if (filter.status && filter.status !== 'all') {
      ads = ads.filter((a) => a.status === filter.status);
    }

    if (filter.layoutType && filter.layoutType !== 'all') {
      ads = ads.filter((a) => a.layoutType === filter.layoutType);
    }

    if (filter.placement && filter.placement !== 'all') {
      ads = ads.filter((a) => a.placement === filter.placement);
    }

    if (filter.campaignName) {
      ads = ads.filter((a) => a.campaignName === filter.campaignName);
    }

    return ads.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  public async getAdvertisementById(id: string): Promise<Advertisement | null> {
    const ads = this.getStoredAds();
    return ads.find((a) => a.id === id) || null;
  }

  public async createAdvertisement(
    data: Omit<Advertisement, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<Advertisement> {
    const ads = this.getStoredAds();
    const newAd: Advertisement = {
      ...data,
      id: `ad-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    ads.push(newAd);
    this.saveAds(ads);

    // Also auto-assign to the relevant section if matching
    const sections = this.getStoredSections();
    const targetSection = sections.find(
      (s) => s.layoutType === newAd.layoutType
    );
    if (targetSection && !targetSection.assignedAdIds.includes(newAd.id)) {
      targetSection.assignedAdIds.push(newAd.id);
      this.saveSections(sections);
    }

    return newAd;
  }

  public async updateAdvertisement(
    id: string,
    data: Partial<Advertisement>
  ): Promise<Advertisement> {
    const ads = this.getStoredAds();
    const index = ads.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new Error(`Advertisement with ID ${id} not found.`);
    }

    const updated: Advertisement = {
      ...ads[index],
      ...data,
      updatedAt: new Date().toISOString(),
    };

    ads[index] = updated;
    this.saveAds(ads);
    return updated;
  }

  public async deleteAdvertisement(id: string): Promise<boolean> {
    let ads = this.getStoredAds();
    const initialLen = ads.length;
    ads = ads.filter((a) => a.id !== id);

    if (ads.length !== initialLen) {
      this.saveAds(ads);

      // Clean from sections
      const sections = this.getStoredSections();
      sections.forEach((s) => {
        s.assignedAdIds = s.assignedAdIds.filter((adId) => adId !== id);
      });
      this.saveSections(sections);
      return true;
    }
    return false;
  }

  public async duplicateAdvertisement(id: string): Promise<Advertisement> {
    const original = await this.getAdvertisementById(id);
    if (!original) {
      throw new Error(`Advertisement with ID ${id} not found.`);
    }

    const duplicateData: Omit<Advertisement, 'id' | 'createdAt' | 'updatedAt'> = {
      ...original,
      name: `${original.name} (Copy)`,
      status: 'draft',
      displayOrder: original.displayOrder + 1,
    };

    return this.createAdvertisement(duplicateData);
  }

  public async toggleStatus(id: string): Promise<Advertisement> {
    const ad = await this.getAdvertisementById(id);
    if (!ad) {
      throw new Error(`Advertisement with ID ${id} not found.`);
    }

    const nextStatus = ad.status === 'active' ? 'disabled' : 'active';
    return this.updateAdvertisement(id, { status: nextStatus });
  }

  public async reorderAdvertisements(adIds: string[]): Promise<boolean> {
    const ads = this.getStoredAds();
    const map = new Map(ads.map((a) => [a.id, a]));

    const reordered: Advertisement[] = [];
    adIds.forEach((id, idx) => {
      const ad = map.get(id);
      if (ad) {
        reordered.push({ ...ad, displayOrder: idx + 1 });
        map.delete(id);
      }
    });

    // Append any left out
    map.forEach((ad) => {
      reordered.push({ ...ad, displayOrder: reordered.length + 1 });
    });

    this.saveAds(reordered);
    return true;
  }

  public async getStats(): Promise<AdvertisementStats> {
    const ads = this.getStoredAds();
    const campaigns = new Set(ads.map((a) => a.campaignName).filter(Boolean));

    const now = new Date().toISOString();

    let active = 0;
    let scheduled = 0;
    let draft = 0;
    let expired = 0;

    ads.forEach((a) => {
      if (a.status === 'draft') {
        draft++;
      } else if (a.status === 'expired' || (a.endDate && a.endDate < now)) {
        expired++;
      } else if (a.status === 'scheduled' || (a.startDate && a.startDate > now)) {
        scheduled++;
      } else if (a.status === 'active') {
        active++;
      }
    });

    return {
      total: ads.length,
      active,
      scheduled,
      draft,
      expired,
      campaignCount: campaigns.size,
    };
  }

  // --- Homepage Section Management ---

  public async getHomepageSections(): Promise<HomepageAdSectionConfig[]> {
    const sections = this.getStoredSections();
    return sections.sort((a, b) => a.order - b.order);
  }

  public async updateHomepageSection(
    id: string,
    updates: Partial<HomepageAdSectionConfig>
  ): Promise<HomepageAdSectionConfig> {
    const sections = this.getStoredSections();
    const index = sections.findIndex((s) => s.id === id);
    if (index === -1) {
      throw new Error(`Section with ID ${id} not found.`);
    }

    sections[index] = {
      ...sections[index],
      ...updates,
    };

    this.saveSections(sections);
    return sections[index];
  }

  public async reorderHomepageSections(sectionIds: string[]): Promise<boolean> {
    const sections = this.getStoredSections();
    const map = new Map(sections.map((s) => [s.id, s]));

    const reordered: HomepageAdSectionConfig[] = [];
    sectionIds.forEach((id, idx) => {
      const sec = map.get(id);
      if (sec) {
        reordered.push({ ...sec, order: idx + 1 });
        map.delete(id);
      }
    });

    map.forEach((sec) => {
      reordered.push({ ...sec, order: reordered.length + 1 });
    });

    this.saveSections(reordered);
    return true;
  }

  public async resetToDefaults(): Promise<void> {
    this.saveAds(INITIAL_ADVERTISEMENTS);
    this.saveSections(INITIAL_HOMEPAGE_SECTIONS);
  }
}

export const advertisementService = new AdvertisementService();
