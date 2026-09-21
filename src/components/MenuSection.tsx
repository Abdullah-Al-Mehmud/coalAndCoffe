'use client';

/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Coffee, Utensils, Dessert, Grid, CheckCircle2 } from 'lucide-react';
import { MenuCard, MenuCardProps } from './MenuCard';

interface MenuItemData extends MenuCardProps {
  id: string;
  categoryGroup: 'brews' | 'bites' | 'sweets';
}

const MENU_ITEMS: MenuItemData[] = [
  {
    id: 'iced-americano',
    title: 'Signature Iced Americano',
    categoryGroup: 'brews',
    category: 'Signature Brew',
    description: 'Rich artisanal espresso poured over crystal ice, dark cocoa undertones and velvety crema.',
    price: '৳380',
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800',
    isPopular: true,
    badgeText: 'Top 3 in Dhaka',
  },
  {
    id: 'fish-and-chips',
    title: 'Classic Fish & Chips',
    categoryGroup: 'bites',
    category: 'Mains',
    description: 'Golden dory fillets with hand-cut sea salt fries, house lemon tartar sauce, and mint pea puree.',
    price: '৳745',
    imageUrl: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?q=80&w=800',
    isPopular: true,
    badgeText: "Chef's Special",
  },
  {
    id: 'fettuccine-alfredo',
    title: 'Fettuccine Alfredo',
    categoryGroup: 'bites',
    category: 'Pasta',
    description: 'Fresh fettuccine pasta tossed in aged parmesan cream sauce, roasted garlic, black pepper & herbs.',
    price: '৳680',
    imageUrl: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800',
    isPopular: true,
    badgeText: 'Guest Favorite',
  },
  {
    id: 'salted-caramel-cake',
    title: 'Salted Caramel Cake',
    categoryGroup: 'sweets',
    category: 'Dessert',
    description: 'Moist dark chocolate layers filled with warm sea salt caramel and hazelnut praline crunch.',
    price: '৳380',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
    isPopular: true,
    badgeText: 'Decadent',
  },
  {
    id: 'artisanal-cappuccino',
    title: 'Artisanal Cappuccino',
    categoryGroup: 'brews',
    category: 'Hot Coffee',
    description: 'Double shot of house espresso layered with micro-foamed local farm milk and dusting of cocoa.',
    price: '৳280',
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800',
    isPopular: false,
    badgeText: 'Barista Pick',
  },
  {
    id: 'nitro-cold-brew',
    title: 'Nitro Cold Brew Coffee',
    categoryGroup: 'brews',
    category: 'Signature Cold',
    description: '18-hour cold steeped single-origin roast infused with nitrogen for silky draught texture.',
    price: '৳350',
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800',
    isPopular: false,
    badgeText: 'Slow Steeped',
  },
];

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'brews' | 'bites' | 'sweets'>('all');
  const [orderedItem, setOrderedItem] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Items', icon: Grid },
    { id: 'brews', label: 'The Brews', icon: Coffee },
    { id: 'bites', label: 'The Bites', icon: Utensils },
    { id: 'sweets', label: 'The Sweets', icon: Dessert },
  ];

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.categoryGroup === activeCategory);

  const handleOrder = (title: string) => {
    setOrderedItem(title);
    setTimeout(() => {
      setOrderedItem(null);
    }, 3000);
  };

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#FDFBF7] border-t border-[#2B1E16]/10">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EEDCC6]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Toast Alert for Added Item */}
        <AnimatePresence>
          {orderedItem && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 bg-[#211611] text-[#FDFBF7] px-5 py-3.5 rounded-2xl shadow-xl border border-white/10 flex items-center gap-3 text-sm font-medium"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>Added <strong>{orderedItem}</strong> to order!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B07A3B] mb-3 px-3.5 py-1.5 rounded-full bg-white border border-[#2B1E16]/10 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gastronomic Craft</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#211611] tracking-tight">
              Crafted for the Craving.
            </h2>
          </motion.div>

          {/* Interactive Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-1.5 backdrop-blur-md bg-[#F8F5F0] p-1.5 rounded-2xl sm:rounded-full border border-[#2B1E16]/10"
          >
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as 'all' | 'brews' | 'bites' | 'sweets')}
                  className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#211611] text-[#FDFBF7] shadow-sm'
                      : 'text-stone-600 hover:text-[#211611] hover:bg-white/60'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? 'text-[#E6C687]' : 'text-[#B07A3B]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <MenuCard
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  category={item.category}
                  isPopular={item.isPopular}
                  badgeText={item.badgeText}
                  onOrder={() => handleOrder(item.title)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
