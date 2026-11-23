export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  itemCount: number;
  featured: boolean;
  imageUrl: string;
  iconName: string;
}

export interface Product {
  id: string;
  name: string;
  tamilName?: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  weight: string;
  price: number;
  originalPrice?: number;
  discountPercentage?: number;
  inStock: boolean;
  isBestseller?: boolean;
  isSpecialOffer?: boolean;
  isOrganic?: boolean;
  origin?: string;
  imageUrl: string;
  nutritionalHighlights?: string[];
  tags: string[];
}
