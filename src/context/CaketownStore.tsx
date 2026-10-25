import React, { createContext, useContext, useState, useEffect } from 'react';
import { menuItems as initialMenu, MenuItem, MenuCategory } from '@/data/menu';
import { locations as initialLocations, Location } from '@/data/locations';
import { offers as initialOffers, Offer } from '@/data/offers';
import { galleryImages as initialGallery, GalleryImage } from '@/data/gallery';

export interface CategoryConfig {
  id: MenuCategory;
  label: string;
  tag: string;
  bgColor: string;
  textColor: string;
  ambience: string;
  image: string;
}

export interface SiteThemeConfig {
  brandOrange: string;
  brandCream: string;
  brandBlack: string;
  brandCherry: string;
  heroEyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3: string;
  heroSubtext: string;
  tickerText: string;
}

export const INITIAL_CATEGORIES: CategoryConfig[] = [
  {
    id: 'cakes',
    label: 'Cakes',
    tag: '16 Flavours',
    bgColor: '#F47A1F',
    textColor: '#FFFFFF',
    image: '/cake.webp',
    ambience: '#FFF7EE',
  },
  {
    id: 'pastries',
    label: 'Pastries',
    tag: 'Fresh Slices',
    bgColor: '#E43838',
    textColor: '#FFFFFF',
    image: '/pastry.webp',
    ambience: '#FFF0F0',
  },
  {
    id: 'desserts',
    label: 'Desserts',
    tag: 'Cups & Brownies',
    bgColor: '#4A2418',
    textColor: '#FFFFFF',
    image: '/pudding.webp',
    ambience: '#FDF7F2',
  },
  {
    id: 'coffee',
    label: 'Coffee',
    tag: 'Freshly Brewed',
    bgColor: '#C59A75',
    textColor: '#111111',
    image: '/Americano.webp',
    ambience: '#F9F6F0',
  },
  {
    id: 'shakes',
    label: 'Shakes',
    tag: 'Thick Blends',
    bgColor: '#111111',
    textColor: '#FFFFFF',
    image: '/shake.webp',
    ambience: '#F4F5F7',
  },
  {
    id: 'donuts',
    label: 'Donuts',
    tag: 'Glazed Daily',
    bgColor: '#D96A15',
    textColor: '#FFFFFF',
    image: '/donut.webp',
    ambience: '#FFF3E8',
  },
];

export const INITIAL_THEME: SiteThemeConfig = {
  brandOrange: '#F47A1F',
  brandCream: '#FFF7EE',
  brandBlack: '#111111',
  brandCherry: '#E43838',
  heroEyebrow: 'CAKETOWN CAFE • PRATAPGARH',
  heroLine1: 'CAKE.',
  heroLine2: 'COFFEE.',
  heroLine3: 'GOOD TIMES.',
  heroSubtext: 'Cakes, pastries, desserts and coffee | baked fresh, served with a smile.',
  tickerText:
    'FRESHLY BAKED EVERY MORNING ✦ ARTISANAL CELEBRATION CAKES ✦ SPECIALTY ESPRESSO & FRAPPES ✦ THICK MILKSHAKES ✦ CHOWK BAJAJA • BHANGWA CHUNGI • AMBEDKAR CHAURAHA',
};

interface CaketownContextType {
  items: MenuItem[];
  categories: CategoryConfig[];
  locationsList: Location[];
  offersList: Offer[];
  galleryList: GalleryImage[];
  theme: SiteThemeConfig;
  featuredIds: string[];
  updateTheme: (newTheme: Partial<SiteThemeConfig>) => void;
  updateCategories: (cats: CategoryConfig[]) => void;
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  toggleFeaturedId: (id: string) => void;
  updateLocations: (locs: Location[]) => void;
  updateOffers: (offs: Offer[]) => void;
  updateGallery: (imgs: GalleryImage[]) => void;
  resetAllToDefaults: () => void;
}

const CaketownContext = createContext<CaketownContextType | null>(null);

export function CaketownProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<MenuItem[]>(() => {
    const saved = localStorage.getItem('ct_menu_items');
    return saved ? JSON.parse(saved) : initialMenu;
  });

  const [categories, setCategories] = useState<CategoryConfig[]>(() => {
    const saved = localStorage.getItem('ct_categories');
    return saved ? JSON.parse(saved) : INITIAL_CATEGORIES;
  });

  const [locationsList, setLocationsList] = useState<Location[]>(() => {
    const saved = localStorage.getItem('ct_locations');
    return saved ? JSON.parse(saved) : initialLocations;
  });

  const [offersList, setOffersList] = useState<Offer[]>(() => {
    const saved = localStorage.getItem('ct_offers');
    return saved ? JSON.parse(saved) : initialOffers;
  });

  const [galleryList, setGalleryList] = useState<GalleryImage[]>(() => {
    const saved = localStorage.getItem('ct_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  const [theme, setTheme] = useState<SiteThemeConfig>(() => {
    const saved = localStorage.getItem('ct_theme');
    return saved ? { ...INITIAL_THEME, ...JSON.parse(saved) } : INITIAL_THEME;
  });

  const [featuredIds, setFeaturedIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('ct_featured_ids');
    return saved ? JSON.parse(saved) : ['c5', 'p5', 'cf1', 's8', 'dn1', 'c2'];
  });

  // Apply Live CSS Variables to :root whenever theme updates
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color-orange', theme.brandOrange);
    root.style.setProperty('--color-cream', theme.brandCream);
    root.style.setProperty('--color-black', theme.brandBlack);
    root.style.setProperty('--color-cherry', theme.brandCherry);
    localStorage.setItem('ct_theme', JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('ct_menu_items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('ct_categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('ct_locations', JSON.stringify(locationsList));
  }, [locationsList]);

  useEffect(() => {
    localStorage.setItem('ct_offers', JSON.stringify(offersList));
  }, [offersList]);

  useEffect(() => {
    localStorage.setItem('ct_gallery', JSON.stringify(galleryList));
  }, [galleryList]);

  useEffect(() => {
    localStorage.setItem('ct_featured_ids', JSON.stringify(featuredIds));
  }, [featuredIds]);

  const updateTheme = (newTheme: Partial<SiteThemeConfig>) => {
    setTheme((prev) => ({ ...prev, ...newTheme }));
  };

  const updateCategories = (cats: CategoryConfig[]) => setCategories(cats);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem: MenuItem = { ...item, id: `ct_${Date.now()}` };
    setItems((prev) => [newItem, ...prev]);
  };

  const updateMenuItem = (updated: MenuItem) => {
    setItems((prev) => prev.map((i) => (i.id === updated.id ? updated : i)));
  };

  const deleteMenuItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleFeaturedId = (id: string) => {
    setFeaturedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const updateLocations = (locs: Location[]) => setLocationsList(locs);
  const updateOffers = (offs: Offer[]) => setOffersList(offs);
  const updateGallery = (imgs: GalleryImage[]) => setGalleryList(imgs);

  const resetAllToDefaults = () => {
    localStorage.removeItem('ct_menu_items');
    localStorage.removeItem('ct_categories');
    localStorage.removeItem('ct_locations');
    localStorage.removeItem('ct_offers');
    localStorage.removeItem('ct_gallery');
    localStorage.removeItem('ct_theme');
    localStorage.removeItem('ct_featured_ids');
    setItems(initialMenu);
    setCategories(INITIAL_CATEGORIES);
    setLocationsList(initialLocations);
    setOffersList(initialOffers);
    setGalleryList(initialGallery);
    setTheme(INITIAL_THEME);
    setFeaturedIds(['c5', 'p5', 'cf1', 's8', 'dn1', 'c2']);
  };

  return (
    <CaketownContext.Provider
      value={{
        items,
        categories,
        locationsList,
        offersList,
        galleryList,
        theme,
        featuredIds,
        updateTheme,
        updateCategories,
        addMenuItem,
        updateMenuItem,
        deleteMenuItem,
        toggleFeaturedId,
        updateLocations,
        updateOffers,
        updateGallery,
        resetAllToDefaults,
      }}
    >
      {children}
    </CaketownContext.Provider>
  );
}

export function useCaketown() {
  const ctx = useContext(CaketownContext);
  if (!ctx) throw new Error('useCaketown must be used within CaketownProvider');
  return ctx;
}