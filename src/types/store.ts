export interface StoreFacility {
  name: string;
  icon: string;
  available: boolean;
}

export interface StoreLocation {
  id: string;
  name: string;
  area: string;
  zone: 'Chennai Central' | 'Chennai South' | 'Chennai North' | 'Chennai West' | 'Suburbs';
  address: string;
  landmark: string;
  pincode: string;
  phone: string;
  email: string;
  timings: string;
  googleMapQuery: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  isFeatured?: boolean;
  imageUrl: string;
  images?: string[];
  description?: string;
  partnerBrands?: string[];
}
