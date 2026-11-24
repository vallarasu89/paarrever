import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'EN' | 'TA';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TRANSLATIONS: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { EN: 'Home', TA: 'முகப்பு' },
  'nav.about': { EN: 'About Us', TA: 'எங்களை பற்றி' },
  'nav.categories': { EN: 'Categories', TA: 'பிரிவுகள்' },
  'nav.stores': { EN: 'Store Locator', TA: 'கிளைகள்' },
  'nav.contact': { EN: 'Contact', TA: 'தொடர்பு' },
  'nav.reviews': { EN: 'Reviews', TA: 'கருத்துகள்' },
  'nav.passport': { EN: 'PAARR Passport', TA: 'பார் பாஸ்போர்ட்' },
  'nav.callUs': { EN: 'Call', TA: 'அழைக்க' },
  'nav.findStore': { EN: 'Find Store', TA: 'கிளைகள்' },
  'nav.chatWhatsapp': { EN: 'WhatsApp', TA: 'வாட்ஸ்அப்' },

  // Announcements
  'announcement.welcome': {
    EN: 'Welcome to PAARR EVER — Neighborhood Supermarkets across Chennai',
    TA: 'பார் எவர் சூப்பர் மார்க்கெட் — சென்னை முழுவதும் அங்காடி கிளைகள்',
  },
  'announcement.lowestPrice': {
    EN: 'Lowest Price Guarantee on Daily Staples across Chennai',
    TA: 'தினசரி மளிகைப் பொருட்களுக்கு சென்னையில் மிகக் குறைந்த விலை உத்திரவாதம்',
  },

  // Common CTAs & Badges
  'badge.grandOpening': { EN: 'Grand New Opening', TA: 'பிரம்மாண்ட புதிய திறப்பு விழா' },
  'badge.flagship': { EN: 'Flagship Complex', TA: 'முதன்மைக் காம்ப்ளக்ஸ்' },
  'badge.nowOpen': { EN: 'Now Open for Chennai', TA: 'தற்போது திறக்கப்பட்டுள்ளது' },
  'btn.findNearestStore': { EN: 'Find Nearest Store', TA: 'அருகிலுள்ள கடையைக் காண்க' },
  'btn.viewAllStores': { EN: 'View All 25+ Stores', TA: 'அனைத்து 25+ கிளைகளையும் காண்க' },
  'btn.getDirections': { EN: 'Get Directions', TA: 'வழித்தடம் காண்க' },
  'btn.viewDetails': { EN: 'View Photos & Details', TA: 'புகைப்படங்கள் & விவரங்கள்' },
  'btn.exploreFlagship': { EN: 'Explore Flagship Complex', TA: 'முதன்மைக் கிளையைக் காண்க' },
  'btn.callBranch': { EN: 'Call This Branch', TA: 'கிளையை அழைக்கவும்' },
  'btn.resetFilters': { EN: 'Reset Filters', TA: 'வடிப்பான்களை மீட்டமைக்கவும்' },

  // Store Locator
  'stores.heroTitle': { EN: 'Find Your Nearest PAARR Store', TA: 'உங்கள் அருகிலுள்ள பார் கிளையைக் கண்டறியவும்' },
  'stores.heroSubtitle': {
    EN: 'Experience Chennai’s newest flagship multi-brand hypermarket on OMR and 25+ neighborhood supermarket locations with farm-fresh harvests, pure cold-pressed oils, and courteous hospitality.',
    TA: 'ஓ.எம்.ஆர்-ல் அமைந்துள்ள புதிய முதன்மை மல்டி-பிராண்ட் ஹைப்பர்மார்க்கெட் மற்றும் சென்னை முழுவதும் உள்ள 25+ அங்காடி கிளைகளில் தூய மரச்செக்கு எண்ணெய் மற்றும் பண்ணைப் பசுமைப் பொருட்களைப் பெற்றிடுங்கள்.',
  },
  'stores.searchPlaceholder': {
    EN: 'Search neighborhood or pincode (e.g. OMR, Mylapore, Besant Nagar)...',
    TA: 'பகுதி அல்லது பின்கோடு தேடவும் (எ.கா: OMR, மைலாப்பூர், பெசன்ட் நகர்)...',
  },
  'stores.flagshipSpotlight': {
    EN: 'FLAGSHIP SPOTLIGHT • GRAND NEW OPENING',
    TA: 'முதன்மைக் கிளை சிறப்பம்சம் • பிரம்மாண்ட புதிய திறப்பு விழா',
  },
  'stores.neighborhoodTitle': {
    EN: 'Neighborhood Supermarket Branches Across Chennai',
    TA: 'சென்னை முழுவதும் உள்ள அண்டை சூப்பர் மார்க்கெட் கிளைகள்',
  },
  'stores.hotspots': { EN: 'Hotspots:', TA: 'முக்கிய பகுதிகள்:' },
  'stores.showingStores': { EN: 'Showing Stores in Chennai', TA: 'சென்னை கிளைகள்' },
  'stores.hours': { EN: 'Operating Hours', TA: 'இயங்கும் நேரம்' },
  'stores.phone': { EN: 'Branch Phone', TA: 'தொடர்பு எண்' },
  'stores.facilities': { EN: 'Facilities & Amenities', TA: 'கிளை வசதிகள்' },
  'stores.photosCount': { EN: 'Photos Available', TA: 'புகைப்படங்கள் உள்ளன' },
  'stores.navigateMaps': { EN: 'Navigate on Google Maps', TA: 'கூகுள் மேப் வழிகாட்டல்' },

  // Brand Experiences
  'brandExp.title': { EN: 'Brand Experiences at PAARR', TA: 'பார் பெருமைமிகு பிராண்ட் அனுபவங்கள்' },
  'brandExp.subtitle': {
    EN: 'One extraordinary destination bringing together PAARR Hypermarket, Vasanth & Co, Style Union, and M.A. Ethirajulu Naidu.',
    TA: 'பார் ஹைப்பர்மார்க்கெட், வசந்த் & கோ, ஸ்டைல் யூனியன் மற்றும் எம்.ஏ. எத்திராஜுலு நாயுடு ஆகியவை ஒரே கூரையின் கீழ் இணையும் பிரம்மாண்ட தளம்.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('paarr_language');
    return saved === 'TA' ? 'TA' : 'EN';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('paarr_language', lang);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'EN' ? 'TA' : 'EN');
  };

  const t = (key: string): string => {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[language] || entry.EN || key;
  };

  useEffect(() => {
    document.documentElement.lang = language === 'TA' ? 'ta' : 'en';
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
