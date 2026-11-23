export interface BaseEntity {
  id: string;
  createdAt?: string;
  updatedAt?: string;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface MetaTag {
  title: string;
  description: string;
  canonical?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  verifiedShopper: boolean;
  storeLocation: string;
  categoryPurchased: string;
  comment: string;
  helpfulCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'shopping' | 'passport' | 'stores' | 'membership';
}

export interface OfferItem {
  id: string;
  title: string;
  badge: string;
  discount: string;
  description: string;
  validUntil: string;
  category: string;
  code?: string;
  imageUrl: string;
}
