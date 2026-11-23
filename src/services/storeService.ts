import { STORES } from '@/data/stores';
import { StoreLocation } from '@/types/store';

export const storeService = {
  getAllStores: (): StoreLocation[] => {
    return [...STORES];
  },

  getStoreById: (id: string): StoreLocation | undefined => {
    return STORES.find(store => store.id === id);
  },

  getFeaturedStores: (): StoreLocation[] => {
    return STORES.filter(store => store.isFeatured);
  },

  filterStores: (query?: string, zone?: string, facility?: string): StoreLocation[] => {
    return STORES.filter(store => {
      const matchesQuery = !query || 
        store.name.toLowerCase().includes(query.toLowerCase()) ||
        store.area.toLowerCase().includes(query.toLowerCase()) ||
        store.address.toLowerCase().includes(query.toLowerCase()) ||
        store.pincode.includes(query);

      const matchesZone = !zone || zone === 'All' || store.zone === zone;

      const matchesFacility = !facility || facility === 'All' || 
        store.features.some(f => f.toLowerCase().includes(facility.toLowerCase()));

      return matchesQuery && matchesZone && matchesFacility;
    });
  },

  getZones: (): string[] => {
    const zones = new Set<string>();
    STORES.forEach(s => zones.add(s.zone));
    return ['All', ...Array.from(zones)];
  },
};
