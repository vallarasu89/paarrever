export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface AnnouncementItem {
  id: string;
  message: string;
  highlightText?: string;
  linkText?: string;
  href?: string;
}
