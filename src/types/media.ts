export interface MediaItem {
  id: string;
  fileName: string;
  title: string;
  url: string;
  fileSize: string;
  dimensions: string;
  uploadedAt: string;
  category: 'banners' | 'products' | 'campaigns' | 'general';
}
