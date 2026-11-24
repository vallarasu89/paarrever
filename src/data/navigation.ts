import { NavItem, AnnouncementItem } from '@/types/navigation';

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'ann-1',
    message: 'Welcome to PAARR EVER — Neighborhood Supermarkets across Chennai & Tamil Nadu',
    highlightText: 'Explore Stores',
    href: '/stores',
  },
  {
    id: 'ann-2',
    message: 'Mara Chekku Wood-Pressed Oils & Single-Origin Delta Rices: 7:00 AM fresh arrivals daily.',
    highlightText: 'View Categories',
    href: '/categories',
  },
  {
    id: 'ann-3',
    message: 'Fresh Harvest Staples & Cold-Pressed Oils: Farm direct to your dining table every morning.',
    highlightText: 'Our Promise',
    href: '/about',
  },
];

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
  { label: 'Store Locator', href: '/stores' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_LINKS = {
  about: [
    { label: 'Our Story & Heritage', href: '/about' },
    { label: 'Direct Farmer Sourcing', href: '/about#sourcing' },
    { label: 'Quality Standards', href: '/about#quality' },
    { label: 'Community Initiatives', href: '/about#community' },
  ],
  explore: [
    { label: 'Find a Store Near You', href: '/stores' },
    { label: 'All Supermarket Categories', href: '/categories' },
    { label: 'Verified Customer Reviews', href: '/reviews' },
    { label: 'Frequently Asked Questions', href: '/about#faq' },
  ],
  support: [
    { label: 'Contact Customer Care', href: '/contact' },
    { label: 'Store Feedback', href: '/contact?type=feedback' },
    { label: 'Partnership & Vendor Inquiries', href: '/contact?type=vendor' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-conditions' },
  ],
};
