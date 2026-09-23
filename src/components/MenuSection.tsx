'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Utensils, Dessert, Grid, CheckCircle2 } from 'lucide-react';
import { MenuCard, MenuCardProps } from './MenuCard';
import { Accent, Diamonds } from './decor';

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
    <section id="menu" className="relative overflow-hidden bg-[#FDFBF7] py-24 border-t border-[#2B1E16]/10 sm:py-28">
      {/* Corner ornaments — matches HeroSection */}
      <Diamonds className="top-24 left-8 lg:left-12" />
      <Diamonds className="top-24 right-8 lg:right-12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Toast Alert for Added Item */}
        <AnimatePresence>
          {orderedItem && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#211611] px-5 py-3.5 text-sm font-medium text-[#FDFBF7] shadow-xl"
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              <span>Added <strong>{orderedItem}</strong> to order!</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section header — centered like the hero */}
        <div className="relative z-[200] mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-5 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#211611] sm:text-5xl md:text-6xl"
          >
            Crafted for the <Accent>Craving.</Accent>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            From slow-steeped nitro cold brews to coal-grilled gourmet
            mains—every plate is crafted for the moment.
          </motion.p>
        </div>

        {/* Interactive Category Tabs — pill, like the hero's buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-10 flex w-max max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full border border-[#2B1E16]/10 bg-[#F8F5F0] p-1.5"
        >
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as 'all' | 'brews' | 'bites' | 'sweets')}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-colors duration-300 cursor-pointer sm:text-sm ${
                  isActive ? 'text-[#FDFBF7]' : 'text-stone-600 hover:text-[#211611]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-active"
                    className="absolute inset-0 rounded-full bg-[#211611] shadow-sm"
                    transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <IconComp className={`h-4 w-4 ${isActive ? 'text-[#E6C687]' : 'text-[#B07A3B]'}`} />
                  <span>{cat.label}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Menu Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
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