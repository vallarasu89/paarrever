export type AdvertisementLayoutType =
  | 'hero_carousel'
  | 'split_banner'
  | 'promo_cards'
  | 'full_width'
  | 'featured_product'
  | 'category_promo'
  | 'popup';

export type AdvertisementPlacement =
  | 'home_top'
  | 'home_middle'
  | 'home_bottom'
  | 'home_popup';

export type AdvertisementStatus =
  | 'active'
  | 'scheduled'
  | 'draft'
  | 'expired'
  | 'disabled';

export interface Advertisement {
  id: string;
  name: string;
  campaignName: string;
  heading: string;
  subtitle?: string;
  description?: string;
  desktopImage: string;
  mobileImage?: string;
  ctaText: string;
  ctaLink: string;
  layoutType: AdvertisementLayoutType;
  placement: AdvertisementPlacement;
  displayOrder: number;
  status: AdvertisementStatus;
  startDate?: string;
  endDate?: string;
  badgeText?: string;
  discountText?: string;
  bgColor?: string;
  textColor?: string;
  reverseLayout?: boolean; // For split banner left/right alternate
  createdAt: string;
  updatedAt: string;
}

export interface AdvertisementFilter {
  search?: string;
  status?: AdvertisementStatus | 'all';
  layoutType?: AdvertisementLayoutType | 'all';
  placement?: AdvertisementPlacement | 'all';
  campaignName?: string;
}

export interface AdvertisementStats {
  total: number;
  active: number;
  scheduled: number;
  draft: number;
  expired: number;
  campaignCount: number;
}

export interface HomepageAdSectionConfig {
  id: string;
  title: string;
  layoutType: AdvertisementLayoutType;
  placement: AdvertisementPlacement;
  enabled: boolean;
  order: number;
  assignedAdIds: string[];
}
