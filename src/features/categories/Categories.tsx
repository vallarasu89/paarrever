import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container/Container';
import { Breadcrumb } from '@/components/common/Breadcrumb/Breadcrumb';
import { PageTransition } from '@/components/animations/PageTransition';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Cookie,
  Utensils,
  ShoppingBag,
  Milk,
  BookOpen,
  Smile,
  PawPrint,
  LayoutGrid,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Store,
  Droplet,
  Carrot,
  Flame,
  Coffee,
  Wheat,
  Home as HomeIcon,
  Heart,
  Gift,
  Clock,
  MapPin,
  X,
  Filter
} from 'lucide-react';

interface FullCategoryItem {
  id: string;
  name: string;
  tamilName: string;
  group: 'staples' | 'dairy-fresh' | 'oils-spices' | 'snacks' | 'care-pets' | 'home-pooja';
  groupLabel: string;
  itemCount: string;
  icon: React.ElementType;
  imageUrl: string;
  badge?: string;
  subItems: string[];
  description: string;
}

const ALL_CATEGORIES: FullCategoryItem[] = [
  {
    id: 'packaged-food',
    name: 'Packaged Food & Baking',
    tamilName: 'பேக்கேஜ் உணவு பொருட்கள்',
    group: 'snacks',
    groupLabel: 'Snacks & Pantry',
    itemCount: '220+ Items',
    icon: Cookie,
    imageUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=700&q=80',
    badge: 'Popular',
    subItems: ['Forest Honey', 'Artisanal Jams', 'Oats & Muesli', 'Baking Mixes', 'Pasta'],
    description: 'Breakfast mixes, wild multiflora honey, fruit preserves, and chemical-free pantry staples.'
  },
  {
    id: 'snacking-sweets',
    name: 'Snacking & Sweets',
    tamilName: 'கை முறுக்கு & இனிப்புகள்',
    group: 'snacks',
    groupLabel: 'Snacks & Pantry',
    itemCount: '280+ Items',
    icon: Utensils,
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=700&q=80',
    badge: 'Bestseller',
    subItems: ['Cold-Pressed Kai Murukku', 'Kara Thattai', 'Tirunelveli Halwa', 'Kadalai Mittai'],
    description: 'Nostalgic South Indian savories and festive sweets prepared in small batches using pure cow ghee.'
  },
  {
    id: 'daily-essentials',
    name: 'Daily Essentials & Pulses',
    tamilName: 'தானியங்கள் & பருப்பு வகைகள்',
    group: 'staples',
    groupLabel: 'Staples & Grains',
    itemCount: '380+ Items',
    icon: ShoppingBag,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80',
    badge: 'Delta Direct',
    subItems: ['Kallakurichi Toor Dal', 'Salem Urad Dal', 'Moong Dal', 'Country Jaggery'],
    description: 'Single-origin unpolished dals and heritage grains sourced directly from farmer clusters.'
  },
  {
    id: 'mara-chekku-oils',
    name: 'Mara Chekku Wood-Pressed Oils',
    tamilName: 'மரச்செக்கு நல்லெண்ணெய்',
    group: 'oils-spices',
    groupLabel: 'Oils & Spices',
    itemCount: '45+ Varieties',
    icon: Droplet,
    imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80',
    badge: 'Zero Chemicals',
    subItems: ['Vaagai Chekku Gingelly', 'Groundnut Oil', 'Virgin Coconut Oil', 'Castor Oil'],
    description: 'Cold-pressed in traditional Vaagai wooden churns below 40°C. Never chemically bleached or heated.'
  },
  {
    id: 'dairy',
    name: 'Farm Fresh Dairy & Cow Ghee',
    tamilName: 'நாட்டு மாட்டு பால் & நெய்',
    group: 'dairy-fresh',
    groupLabel: 'Dairy & Fresh Produce',
    itemCount: '80+ Items',
    icon: Milk,
    imageUrl: 'https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80',
    badge: '7:00 AM Fresh',
    subItems: ['Bilona Cow Ghee', 'Thick Set Curd', 'Fresh Paneer', 'Country Butter'],
    description: 'Dawn arrivals of country milk, farm-set buffalo curd, and aromatic bilona cow ghee.'
  },
  {
    id: 'fresh-produce',
    name: 'Fresh Harvest Produce & Greens',
    tamilName: 'பண்ணை பசுமை காய்கறிகள்',
    group: 'dairy-fresh',
    groupLabel: 'Dairy & Fresh Produce',
    itemCount: '150+ Crops',
    icon: Carrot,
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    badge: 'Harvest Fresh',
    subItems: ['Siru & Arai Keerai', 'Country Drumsticks', 'Sambar Small Onions', 'Local Gourds'],
    description: 'Direct field harvest delivered within hours from Chengalpattu and Villupuram farmer societies.'
  },
  {
    id: 'spices-masalas',
    name: 'Stone-Ground Masalas & Spices',
    tamilName: 'கல் அரைத்த மசாலா பொடிகள்',
    group: 'oils-spices',
    groupLabel: 'Oils & Spices',
    itemCount: '190+ Items',
    icon: Flame,
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=700&q=80',
    badge: 'No Colors',
    subItems: ['Salem Turmeric', 'Guntur Stemless Chillies', 'Sambar Powder', 'Idli Podi'],
    description: 'Sun-dried whole spices pulverized in slow stone mills to preserve aromatic volatile oils.'
  },
  {
    id: 'beverages-coffee',
    name: 'Kumbakonam Coffee & Beverages',
    tamilName: 'கும்பகோணம் டிகிரி காபி',
    group: 'snacks',
    groupLabel: 'Snacks & Pantry',
    itemCount: '110+ Items',
    icon: Coffee,
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=700&q=80',
    badge: 'In-Store Roastery',
    subItems: ['80:20 Degree Filter Coffee', 'Plantation A Roast', 'Nilgiri Leaf Tea', 'Sukku Coffee'],
    description: 'Slow-roasted Arabica and Robusta blends freshly ground at our in-store coffee counters.'
  },
  {
    id: 'millets-heritage-rice',
    name: 'Traditional Rices & Millets',
    tamilName: 'பாரம்பரிய அரிசி & சிறுதானியம்',
    group: 'staples',
    groupLabel: 'Staples & Grains',
    itemCount: '90+ Varieties',
    icon: Wheat,
    imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=700&q=80',
    badge: 'Heritage Grains',
    subItems: ['Mappillai Samba Rice', 'Kavuni Black Rice', 'Kuthiraivali', 'Varagu', 'Thinai'],
    description: 'Ancient nutrient-dense native grains grown under traditional eco-friendly dryland agriculture.'
  },
  {
    id: 'baby-care',
    name: 'Baby Care & Organic Nutrition',
    tamilName: 'குழந்தைகள் பராமரிப்பு',
    group: 'care-pets',
    groupLabel: 'Care & Wellness',
    itemCount: '130+ Items',
    icon: Smile,
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=700&q=80',
    badge: 'Safe & Pure',
    subItems: ['Sprouted Sathu Maavu', 'Organic Baby Biscuits', 'Cotton Diapers', 'Herbal Wash'],
    description: 'Pediatrician-trusted gentle infant care and preservative-free sprouted millet nutrition porridge.'
  },
  {
    id: 'pet-care',
    name: 'Pet Care & Nutrition',
    tamilName: 'செல்லப்பிராணிகள் பராமரிப்பு',
    group: 'care-pets',
    groupLabel: 'Care & Wellness',
    itemCount: '85+ Items',
    icon: PawPrint,
    imageUrl: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=700&q=80',
    badge: 'Nutritious',
    subItems: ['Premium Kibble', 'Dental Chews', 'Herbal Shampoo', 'Feeding Bowls'],
    description: 'Nutrient-rich feeds and gentle hygiene accessories for your dogs, cats, and birds.'
  },
  {
    id: 'stationery',
    name: 'Stationery & Educational Supplies',
    tamilName: 'எழுதுபொருட்கள் & நோட்டுகள்',
    group: 'home-pooja',
    groupLabel: 'Home & Stationery',
    itemCount: '160+ Items',
    icon: BookOpen,
    imageUrl: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=700&q=80',
    badge: 'School Ready',
    subItems: ['Classmate Notebooks', 'Art Supplies', 'Gel & Ink Pens', 'Geometry Boxes'],
    description: 'Complete student academic supplies and office essentials stocked at budget-friendly supermarket prices.'
  },
  {
    id: 'home-care',
    name: 'Home Care, Cleaning & Hygiene',
    tamilName: 'வீட்டு பராமரிப்பு பொருட்கள்',
    group: 'home-pooja',
    groupLabel: 'Home & Stationery',
    itemCount: '210+ Items',
    icon: HomeIcon,
    imageUrl: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=700&q=80',
    badge: 'Eco Friendly',
    subItems: ['Herbal Floor Cleaner', 'Bio-Enzyme Detergents', 'Dish Concentrates', 'Cotton Mops'],
    description: 'Safe and effective home sanitizing solutions formulated for healthy family living spaces.'
  },
  {
    id: 'pooja-essentials',
    name: 'Pooja Essentials & Fragrances',
    tamilName: 'பூஜை பொருட்கள் & சாம்பிராணி',
    group: 'home-pooja',
    groupLabel: 'Home & Stationery',
    itemCount: '140+ Items',
    icon: Sparkles,
    imageUrl: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=700&q=80',
    badge: 'Temple Pure',
    subItems: ['Bhimseni Camphor', 'Gomatha Sambrani Cups', 'Pure Kumkum', 'Cotton Wicks'],
    description: 'Pure prayer items sourced from traditional cottage artisans to create temple sanctity at home.'
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Herbal Wellness',
    tamilName: 'இயற்கை அழகு & மூலிகை',
    group: 'care-pets',
    groupLabel: 'Care & Wellness',
    itemCount: '175+ Items',
    icon: Heart,
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=80',
    badge: 'Herbal Care',
    subItems: ['Cold-Pressed Hair Oil', 'Pure Shikakai Powder', 'Neem Soaps', 'Rose Water'],
    description: 'Time-honored botanical skincare and haircare remedies crafted with pure herbs.'
  },
  {
    id: 'festive-hampers',
    name: 'Festival Gift Hampers & Brassware',
    tamilName: 'பண்டிகை பரிசு கூடைகள்',
    group: 'snacks',
    groupLabel: 'Snacks & Pantry',
    itemCount: '50+ Combos',
    icon: Gift,
    imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80',
    badge: 'Gift Ready',
    subItems: ['Brass Vilakku Gift Sets', 'Sweet & Savory Boxes', 'Corporate Celebration Tins'],
    description: 'Exquisitely packaged gift hampers tailored for weddings, festive galas, and corporate celebrations.'
  },
];

export const Categories: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Departments', icon: LayoutGrid },
    { id: 'staples', label: 'Staples & Grains', icon: Wheat },
    { id: 'oils-spices', label: 'Oils & Spices', icon: Droplet },
    { id: 'dairy-fresh', label: 'Dairy & Fresh Produce', icon: Carrot },
    { id: 'snacks', label: 'Snacks & Beverages', icon: Cookie },
    { id: 'care-pets', label: 'Care & Wellness', icon: Heart },
    { id: 'home-pooja', label: 'Home & Pooja', icon: HomeIcon },
  ];

  const filteredCategories = useMemo(() => {
    return ALL_CATEGORIES.filter((cat) => {
      const matchesGroup = activeGroup === 'all' || cat.group === activeGroup;
      const matchesSearch =
        searchTerm.trim() === '' ||
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.tamilName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.subItems.some((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesGroup && matchesSearch;
    });
  }, [activeGroup, searchTerm]);

  return (
    <PageTransition>
      {/* Sleek, Compact Hero Banner with Vivid, Clear Supermarket Photograph */}
      <section className="relative overflow-hidden bg-[#570B26] text-white py-10 sm:py-12 border-b border-[#7A1034]">
        {/* Vivid Supermarket Background Image with Reduced Transparency */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR EVER Supermarket Aisles & Departments"
            className="w-full h-full object-cover object-right sm:object-center opacity-90"
          />
          {/* Focused left-to-right scrim: solid behind text on left, transparent on right to keep photo vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/80 sm:via-[#570B26]/60 to-transparent" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Breadcrumb items={[{ label: 'Categories' }]} variant="dark" />

            <div className="mt-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9AD24] text-[#570B26] text-[11px] font-extrabold uppercase tracking-wider mb-2.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                5,000+ Supermarket Products
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight drop-shadow-sm">
                All Supermarket Departments &amp; Aisles
              </h1>

              <p className="mt-2.5 text-xs sm:text-sm text-[#FFF9F0]/95 font-sans leading-relaxed max-w-xl">
                Direct delta rices, wood-pressed Mara Chekku oils, 7:00 AM fresh farm produce, and authentic South Indian pantry essentials across all 25+ Chennai stores.
              </p>

              {/* Compact Metrics Row */}
              <div className="mt-4 pt-3 border-t border-white/20 flex flex-wrap items-center gap-4 text-xs font-bold text-[#FCE2A9]">
                <span className="flex items-center gap-1.5 text-white">
                  <Store className="w-3.5 h-3.5 text-[#F9AD24]" />
                  25+ Chennai Outlets
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <Clock className="w-3.5 h-3.5 text-[#F9AD24]" />
                  7 AM Daily Fresh
                </span>
                <span className="flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F9AD24]" />
                  100% Pure Tested
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Redesigned Modern Search Bar and Filter System */}
      <section className="bg-white border-b border-[#EADDE2] shadow-xs py-5 sticky top-[72px] z-30">
        <Container>
          <div className="space-y-4">
            {/* Top Search & Filter Status Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              {/* Prominent Modern Search Bar */}
              <div className="relative flex-1 max-w-xl">
                <Search className="w-5 h-5 text-[#7A1034] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search departments (e.g., Mara Chekku, Ponni Rice, Ghee, Coffee...)"
                  className="w-full pl-11 pr-10 py-2.5 rounded-xl border border-[#EADDE2] bg-[#FFF9F0] text-sm text-[#292329] placeholder-[#766A70] focus:outline-none focus:ring-2 focus:ring-[#7A1034] focus:bg-white transition-all shadow-inner"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-[#766A70] hover:text-[#7A1034] hover:bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Department Count Indicator */}
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F7EAF0] text-[#7A1034] border border-[#7A1034]/20 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-[#F9AD24]" />
                  Showing {filteredCategories.length} Departments
                </span>
                {(searchTerm || activeGroup !== 'all') && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setActiveGroup('all');
                    }}
                    className="text-xs font-bold text-[#7A1034] hover:underline px-2 py-1"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

            {/* Redesigned Filter Tabs with Category Icons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
              {filterTabs.map((tab) => {
                const isActive = activeGroup === tab.id;
                const TabIcon = tab.icon;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveGroup(tab.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-[#7A1034] text-white shadow-sm ring-2 ring-[#7A1034]/20'
                        : 'bg-[#FFF9F0] text-[#292329] hover:bg-[#F7EAF0] hover:text-[#7A1034] border border-[#EADDE2]'
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 ${isActive ? 'text-[#F9AD24]' : 'text-[#7A1034]'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Redesigned Modern Supermarket Category Cards */}
      <section className="py-10 sm:py-16 bg-[#FFF9F0]">
        <Container>
          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#EADDE2] max-w-xl mx-auto p-8 shadow-sm">
              <LayoutGrid className="w-12 h-12 text-[#7A1034] mx-auto mb-3 opacity-60" />
              <h3 className="text-xl font-bold text-[#292329] mb-2">No matching departments found</h3>
              <p className="text-sm text-[#766A70] mb-6">
                We couldn&apos;t find any category matching &ldquo;{searchTerm}&rdquo;. Try clearing your search.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveGroup('all');
                }}
                className="px-6 py-2.5 rounded-xl bg-[#7A1034] text-white font-bold text-sm hover:bg-[#570B26] transition-colors"
              >
                Show All Departments
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((cat, idx) => {
                const Icon = cat.icon;

                return (
                  <FadeIn key={cat.id} delay={idx * 0.02}>
                    <div className="rounded-2xl bg-white border border-[#EADDE2] overflow-hidden hover:border-[#7A1034] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group shadow-xs">
                      {/* Modern Top Image Banner with Tags */}
                      <div className="relative h-44 w-full overflow-hidden bg-[#F7EAF0]">
                        <img
                          src={cat.imageUrl}
                          alt={cat.name}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/20" />

                        {/* Top Left Item Count Pill */}
                        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm text-[#570B26] text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-[#EADDE2] shadow-xs">
                          {cat.itemCount}
                        </div>

                        {/* Top Right Status Badge */}
                        {cat.badge && (
                          <div className="absolute top-2.5 right-2.5 bg-[#7A1034] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                            {cat.badge}
                          </div>
                        )}

                        {/* Bottom Group Tag */}
                        <div className="absolute bottom-2.5 left-2.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-[#FCE2A9] px-2 py-0.5 rounded">
                            {cat.groupLabel}
                          </span>
                        </div>
                      </div>

                      {/* Clean Card Body */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Title & Icon Header Row */}
                          <div className="flex items-start gap-2.5 mb-2">
                            <div className="w-8 h-8 rounded-lg bg-[#F7EAF0] text-[#7A1034] group-hover:bg-[#7A1034] group-hover:text-[#F9AD24] shrink-0 flex items-center justify-center transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-bold text-[#292329] group-hover:text-[#7A1034] transition-colors leading-snug line-clamp-1">
                                {cat.name}
                              </h3>
                              <p className="text-[11px] font-medium text-[#7A1034] font-tamil mt-0.5">
                                {cat.tamilName}
                              </p>
                            </div>
                          </div>

                          <p className="text-xs text-[#766A70] leading-relaxed line-clamp-2 mb-3">
                            {cat.description}
                          </p>

                          {/* Aisle Highlights Pills */}
                          <div className="flex flex-wrap gap-1 mb-4">
                            {cat.subItems.map((item, itemIdx) => (
                              <span
                                key={itemIdx}
                                className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-md bg-[#FFF9F0] text-[#570B26] border border-[#EADDE2] font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="pt-3 border-t border-[#EADDE2] flex items-center justify-between">
                          <span className="text-[11px] text-[#766A70] flex items-center gap-1 font-medium">
                            <Store className="w-3.5 h-3.5 text-[#F9AD24]" />
                            All 25+ Stores
                          </span>

                          <Link
                            to="/stores"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#7A1034] text-white hover:bg-[#570B26] text-xs font-bold transition-all shadow-xs group-hover:bg-[#F9AD24] group-hover:text-[#570B26]"
                          >
                            Explore
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* Trust & Quality Banner */}
      <section className="py-10 bg-white border-t border-[#EADDE2]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5 p-4 rounded-xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-10 h-10 rounded-lg bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-sm">Uncompromised Purity</h4>
                <p className="text-xs text-[#766A70] mt-0.5">
                  100% lab-tested staples, zero artificial polishes, and cold-pressed oils.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5 p-4 rounded-xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-10 h-10 rounded-lg bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-sm">Farm-Gate Pricing</h4>
                <p className="text-xs text-[#766A70] mt-0.5">
                  Direct delta farmer tie-ups bring lowest honest retail prices to Chennai.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3.5 p-4 rounded-xl bg-[#FFF9F0] border border-[#EADDE2]">
              <div className="w-10 h-10 rounded-lg bg-[#7A1034] text-[#F9AD24] flex items-center justify-center shrink-0">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#292329] text-sm">25+ Convenient Outlets</h4>
                <p className="text-xs text-[#766A70] mt-0.5">
                  Open 7:00 AM to 10:30 PM daily across Chennai with courteous service &amp; parking.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Store Locator CTA with Supermarket Photography & Crisp High-Contrast Styling */}
      <section className="relative overflow-hidden py-14 bg-[#570B26] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1920&q=85"
            alt="PAARR EVER Chennai Storefront"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#570B26] via-[#570B26]/90 to-[#7A1034]/80" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9AD24] text-[#570B26] text-[11px] font-extrabold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              Visit In-Person
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 tracking-tight">
              Ready to Shop at Your Nearest PAARR EVER?
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF9F0]/90 mb-6 max-w-lg mx-auto leading-relaxed">
              Find directions, store timings, and customer support numbers for all our 25+ branches across Chennai.
            </p>
            <Link
              to="/stores"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#F9AD24] text-[#570B26] font-bold text-sm hover:bg-[#FCE2A9] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Store className="w-4 h-4" />
              Find Your Neighborhood Store
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </PageTransition>
  );
};

export default Categories;
