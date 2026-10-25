import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCaketown } from '@/context/CaketownStore';
import { MenuCategory, MenuItem } from '@/data/menu';
import {
  Lock,
  Plus,
  Trash2,
  Edit3,
  Palette,
  UtensilsCrossed,
  MapPin,
  Image as ImageIcon,
  RotateCcw,
  Star,
  ArrowLeft,
  Check,
} from 'lucide-react';

export function AdminPage() {
  const {
    items,
    categories,
    locationsList,
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
    updateGallery,
    resetAllToDefaults,
  } = useCaketown();

  const [pin, setPin] = useState('');
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem('ct_admin_auth') === '1'
  );
  const [activeTab, setActiveTab] = useState<'menu' | 'styles' | 'locations' | 'gallery'>('menu');
  const [filterCat, setFilterCat] = useState<string>('all');

  // Menu Editor Form State
  const [editingItem, setEditingItem] = useState<Partial<MenuItem> | null>(null);

  // Gallery Form State
  const [newGalleryUrl, setNewGalleryUrl] = useState('');
  const [newGalleryAlt, setNewGalleryAlt] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === 'caketown2026') {
      sessionStorage.setItem('ct_admin_auth', '1');
      setAuthenticated(true);
    } else {
      alert('Invalid PIN. Default PIN is: caketown2026');
    }
  };

  const handleSaveItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.name || !editingItem?.image) return;
    if (editingItem.id) {
      updateMenuItem(editingItem as MenuItem);
    } else {
      addMenuItem({
        name: editingItem.name,
        category: (editingItem.category as MenuCategory) || 'cakes',
        description: editingItem.description || '',
        image: editingItem.image,
        price: editingItem.price || '',
      });
    }
    setEditingItem(null);
  };

  const filteredAdminItems =
    filterCat === 'all' ? items : items.filter((i) => i.category === filterCat);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center p-5">
        <div className="w-full max-w-md bg-[#1A1A1A] border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
          <img src="/logo2.webp" alt="Caketown Cafe" className="h-12 mx-auto mb-4" />
          <h1 className="font-display font-extrabold text-2xl">Caketown Admin Studio</h1>
          <p className="text-xs text-white/50 mt-1">
            Control Menu Items, Homepage Favourites, Locations &amp; Live Theme Styles
          </p>

          <form onSubmit={handleLogin} className="mt-7 space-y-4 text-left">
            <div>
              <label className="block text-xs uppercase tracking-widest text-caketown-orange font-bold mb-2">
                Admin Access PIN
              </label>
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Default: caketown2026"
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-white text-sm outline-none focus:border-caketown-orange"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-caketown-orange text-white font-bold text-xs uppercase tracking-widest hover:opacity-95 transition-opacity"
            >
              Unlock Caketown Studio
            </button>
          </form>

          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Website
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F4EF] text-[#111111]">
      {/* Top Studio Header */}
      <header className="bg-[#111111] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <img src="/logo2.webp" alt="Caketown" className="h-9 w-auto" />
          <div>
            <h1 className="font-display font-bold text-lg leading-none">
              Caketown Content &amp; Style Manager
            </h1>
            <span className="text-[11px] text-caketown-orange">
              All changes save automatically &amp; update the live website
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (confirm('Reset all menu items and theme styles back to factory defaults?')) {
                resetAllToDefaults();
              }
            }}
            className="px-3.5 py-2 rounded-full border border-white/15 text-xs inline-flex items-center gap-1.5 hover:bg-white/10"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset Defaults
          </button>

          <Link
            to="/"
            className="px-5 py-2 rounded-full bg-caketown-orange text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> View Live Site
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-5 py-8">
        {/* Studio Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-black/10">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'menu', label: `Menu Items (${items.length})`, icon: UtensilsCrossed },
              { id: 'styles', label: 'Theme Colors & Hero Text', icon: Palette },
              { id: 'locations', label: `Locations (${locationsList.length})`, icon: MapPin },
              { id: 'gallery', label: `Gallery (${galleryList.length})`, icon: ImageIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() =>
                  setActiveTab(tab.id as 'menu' | 'styles' | 'locations' | 'gallery')
                }
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#111111] text-white shadow-md'
                    : 'bg-white text-black/70 hover:bg-black/5'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'menu' && (
            <button
              onClick={() =>
                setEditingItem({
                  name: '',
                  category: 'cakes',
                  description: '',
                  image: '/1.webp',
                  price: '',
                })
              }
              className="px-5 py-2.5 rounded-full bg-caketown-orange text-white text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
            >
              <Plus className="w-4 h-4" /> Add New Item
            </button>
          )}
        </div>

        {/* ====================================================================
            TAB 1: MENU & HOMEPAGE FAVOURITES MANAGER
        ==================================================================== */}
        {activeTab === 'menu' && (
          <div className="mt-6">
            {/* Add / Edit Item Drawer */}
            {editingItem && (
              <form
                onSubmit={handleSaveItem}
                className="bg-white rounded-3xl p-6 border-2 border-caketown-orange shadow-xl mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="md:col-span-3 flex items-center justify-between pb-2 border-b border-black/10">
                  <h3 className="font-display font-bold text-xl">
                    {editingItem.id ? `Edit: ${editingItem.name}` : 'Add New Bakery Item'}
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Item Name *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.name || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    placeholder="e.g. Belgian Chocolate Truffle"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Category *</label>
                  <select
                    value={editingItem.category || 'cakes'}
                    onChange={(e) =>
                      setEditingItem({
                        ...editingItem,
                        category: e.target.value as MenuCategory,
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">
                    Image Path or URL *
                  </label>
                  <input
                    type="text"
                    required
                    value={editingItem.image || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, image: e.target.value })}
                    placeholder="e.g. /5.webp or https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase mb-1">Description</label>
                  <input
                    type="text"
                    value={editingItem.description || ''}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, description: e.target.value })
                    }
                    placeholder="Short appetizing description..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1">
                    Optional Price / Label
                  </label>
                  <input
                    type="text"
                    value={editingItem.price || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, price: e.target.value })}
                    placeholder="Leave blank to hide price"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                  />
                </div>

                <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setEditingItem(null)}
                    className="px-5 py-2 rounded-full border border-black/20 text-xs font-bold uppercase"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-full bg-[#111111] text-white text-xs font-bold uppercase"
                  >
                    Save Item
                  </button>
                </div>
              </form>
            )}

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setFilterCat('all')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                  filterCat === 'all' ? 'bg-caketown-orange text-white' : 'bg-white text-black/70'
                }`}
              >
                All ({items.length})
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFilterCat(c.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                    filterCat === c.id ? 'bg-caketown-orange text-white' : 'bg-white text-black/70'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filteredAdminItems.map((item) => {
                const isFav = featuredIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-black/10 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-square bg-caketown-cream relative overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 text-white text-[10px] font-bold uppercase">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h4 className="font-display font-bold text-base">{item.name}</h4>
                        <p className="text-xs text-black/60 line-clamp-2 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 bg-[#FAF7F2] border-t border-black/5 flex items-center justify-between">
                      <button
                        onClick={() => toggleFeaturedId(item.id)}
                        className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase inline-flex items-center gap-1 ${
                          isFav
                            ? 'bg-caketown-orange text-white'
                            : 'bg-white border border-black/15 text-black/60'
                        }`}
                      >
                        <Star className="w-3 h-3" />
                        {isFav ? 'On Homepage' : 'Feature'}
                      </button>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingItem(item)}
                          className="p-2 rounded-full bg-white border border-black/10 hover:border-black"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete "${item.name}"?`)) deleteMenuItem(item.id);
                          }}
                          className="p-2 rounded-full bg-white border border-black/10 text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ====================================================================
            TAB 2: LIVE THEME STYLES, COLORS & HERO COPY EDITOR
        ==================================================================== */}
        {activeTab === 'styles' && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Colors & Category Card Colors */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl">1. Live Brand Palette</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1.5">
                    Primary Brand Orange
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={theme.brandOrange}
                      onChange={(e) => updateTheme({ brandOrange: e.target.value })}
                      className="w-10 h-10 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.brandOrange}
                      onChange={(e) => updateTheme({ brandOrange: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-black/15 text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase mb-1.5">
                    Cream Canvas Color
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={theme.brandCream}
                      onChange={(e) => updateTheme({ brandCream: e.target.value })}
                      className="w-10 h-10 rounded-lg cursor-pointer"
                    />
                    <input
                      type="text"
                      value={theme.brandCream}
                      onChange={(e) => updateTheme({ brandCream: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-black/15 text-xs font-mono"
                    />
                  </div>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl pt-4 border-t border-black/10">
                2. &ldquo;What Are You Craving?&rdquo; 3D Card Colors
              </h3>
              <div className="space-y-3">
                {categories.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#FAF7F2]"
                  >
                    <div className="flex items-center gap-3">
                      <img src={cat.image} alt={cat.label} className="w-9 h-9 object-contain" />
                      <span className="font-display font-bold text-sm">{cat.label}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={cat.bgColor}
                        onChange={(e) => {
                          const next = [...categories];
                          next[idx] = { ...cat, bgColor: e.target.value };
                          updateCategories(next);
                        }}
                        className="w-8 h-8 rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={cat.tag}
                        onChange={(e) => {
                          const next = [...categories];
                          next[idx] = { ...cat, tag: e.target.value };
                          updateCategories(next);
                        }}
                        className="w-28 px-2.5 py-1.5 rounded-lg border border-black/15 text-xs"
                        placeholder="Subtitle tag"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Headline & Ticker Text Editor */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl">3. Homepage Hero &amp; Ticker Copy</h3>

              <div>
                <label className="block text-xs font-bold uppercase mb-1">Hero Top Pill Badge</label>
                <input
                  type="text"
                  value={theme.heroEyebrow}
                  onChange={(e) => updateTheme({ heroEyebrow: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Headline Line 1</label>
                  <input
                    type="text"
                    value={theme.heroLine1}
                    onChange={(e) => updateTheme({ heroLine1: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-black/15 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Headline Line 2</label>
                  <input
                    type="text"
                    value={theme.heroLine2}
                    onChange={(e) => updateTheme({ heroLine2: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-black/15 text-sm font-bold"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">
                    Line 3 (Orange)
                  </label>
                  <input
                    type="text"
                    value={theme.heroLine3}
                    onChange={(e) => updateTheme({ heroLine3: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-black/15 text-sm font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1">Hero Subtitle</label>
                <input
                  type="text"
                  value={theme.heroSubtext}
                  onChange={(e) => updateTheme({ heroSubtext: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-1">
                  Scrolling Marquee Ticker Text
                </label>
                <textarea
                  rows={3}
                  value={theme.tickerText}
                  onChange={(e) => updateTheme({ tickerText: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                />
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-900 text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                Every text or color change above is saved automatically!
              </div>
            </div>
          </div>
        )}

        {/* ====================================================================
            TAB 3: LOCATIONS EDITOR
        ==================================================================== */}
        {activeTab === 'locations' && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationsList.map((loc, idx) => (
              <div
                key={loc.id}
                className="bg-white rounded-3xl p-6 border border-black/10 shadow-sm space-y-3"
              >
                <h3 className="font-display font-bold text-xl">{loc.name}</h3>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-black/50">
                    Outlet Name
                  </label>
                  <input
                    type="text"
                    value={loc.name}
                    onChange={(e) => {
                      const next = [...locationsList];
                      next[idx] = { ...loc, name: e.target.value };
                      updateLocations(next);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-black/15 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-black/50">
                    Badge / Area
                  </label>
                  <input
                    type="text"
                    value={loc.area}
                    onChange={(e) => {
                      const next = [...locationsList];
                      next[idx] = { ...loc, area: e.target.value };
                      updateLocations(next);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-black/15 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-black/50">
                    Address
                  </label>
                  <input
                    type="text"
                    value={loc.address}
                    onChange={(e) => {
                      const next = [...locationsList];
                      next[idx] = { ...loc, address: e.target.value };
                      updateLocations(next);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-black/15 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-black/50">
                    Phone
                  </label>
                  <input
                    type="text"
                    value={loc.phone}
                    onChange={(e) => {
                      const next = [...locationsList];
                      next[idx] = { ...loc, phone: e.target.value };
                      updateLocations(next);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-black/15 text-sm mt-1"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase text-black/50">
                    Hours
                  </label>
                  <input
                    type="text"
                    value={loc.hours}
                    onChange={(e) => {
                      const next = [...locationsList];
                      next[idx] = { ...loc, hours: e.target.value };
                      updateLocations(next);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-black/15 text-sm mt-1"
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ====================================================================
            TAB 4: GALLERY MANAGER
        ==================================================================== */}
        {activeTab === 'gallery' && (
          <div className="mt-6 space-y-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!newGalleryUrl.trim()) return;
                updateGallery([
                  {
                    id: `g_${Date.now()}`,
                    url: newGalleryUrl,
                    alt: newGalleryAlt || 'Caketown Moment',
                    span: 'normal',
                  },
                  ...galleryList,
                ]);
                setNewGalleryUrl('');
                setNewGalleryAlt('');
              }}
              className="bg-white rounded-2xl p-5 border border-black/10 flex flex-wrap gap-3 items-end"
            >
              <div className="flex-1 min-w-[220px]">
                <label className="block text-xs font-bold uppercase mb-1">Photo URL</label>
                <input
                  type="text"
                  required
                  value={newGalleryUrl}
                  onChange={(e) => setNewGalleryUrl(e.target.value)}
                  placeholder="Paste image URL or /filename.webp"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                />
              </div>
              <div className="flex-1 min-w-[200px]">
                <label className="block text-xs font-bold uppercase mb-1">Caption</label>
                <input
                  type="text"
                  value={newGalleryAlt}
                  onChange={(e) => setNewGalleryAlt(e.target.value)}
                  placeholder="e.g. Fresh Chocolate Truffle"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-black/15 text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-caketown-orange text-white text-xs font-bold uppercase"
              >
                + Add Photo
              </button>
            </form>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {galleryList.map((img) => (
                <div
                  key={img.id}
                  className="bg-white rounded-2xl overflow-hidden border border-black/10 relative group"
                >
                  <img src={img.url} alt={img.alt} className="w-full h-44 object-cover" />
                  <button
                    onClick={() => updateGallery(galleryList.filter((g) => g.id !== img.id))}
                    className="absolute top-2 right-2 p-2 rounded-full bg-black/75 text-white hover:bg-red-600"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}