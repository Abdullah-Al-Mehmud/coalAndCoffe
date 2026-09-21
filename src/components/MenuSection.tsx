'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Coffee, Utensils, Dessert, ChevronRight } from 'lucide-react';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<'brews' | 'bites' | 'sweets'>('brews');

  const categories = [
    { id: 'brews', label: 'The Brews', icon: Coffee },
    { id: 'bites', label: 'The Bites', icon: Utensils },
    { id: 'sweets', label: 'The Sweets', icon: Dessert },
  ];

  const menuItems = {
    brews: [
      {
        id: 1,
        name: 'Signature Iced Americano',
        badge: 'Top 3 in Dhaka',
        description: 'Rich artisanal espresso poured over crystal ice, dark cocoa undertones and velvety crema.',
        price: '৳320',
        rating: 4.9,
        reviews: 142,
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800',
        tag: 'Beverage',
      },
      {
        id: 2,
        name: 'Artisanal Cappuccino',
        badge: 'Barista Pick',
        description: 'Double shot of house espresso layered with micro-foamed local farm milk and dusting of cocoa.',
        price: '৳280',
        rating: 4.8,
        reviews: 98,
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800',
        tag: 'Hot Coffee',
      },
      {
        id: 3,
        name: 'Nitro Cold Brew Coffee',
        badge: 'Slow Steeped',
        description: '18-hour cold steeped single-origin roast infused with nitrogen for silky draught texture.',
        price: '৳350',
        rating: 4.9,
        reviews: 86,
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800',
        tag: 'Signature Cold',
      },
    ],
    bites: [
      {
        id: 4,
        name: 'Classic Beer-Battered Fish & Chips',
        badge: "Chef's Special",
        description: 'Golden dory fillets with hand-cut sea salt fries, house lemon tartar sauce, and mint pea puree.',
        price: '৳750',
        rating: 4.8,
        reviews: 112,
        image: 'https://images.unsplash.com/photo-1579208030886-b937da0925dc?q=80&w=800',
        tag: 'Mains',
      },
      {
        id: 5,
        name: 'Cheese Flavoured Fettuccine Alfredo',
        badge: 'Guest Favorite',
        description: 'Fresh fettuccine pasta tossed in aged parmesan cream sauce, roasted garlic, black pepper & herbs.',
        price: '৳680',
        rating: 4.9,
        reviews: 134,
        image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800',
        tag: 'Pasta',
      },
      {
        id: 6,
        name: 'Cream of Roasted Wild Mushroom Soup',
        badge: 'Comfort Warmth',
        description: 'Velvety purée of button & portobello mushrooms, drizzled with truffle oil and sourdough croutons.',
        price: '৳420',
        rating: 4.7,
        reviews: 75,
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800',
        tag: 'Soup & Starter',
      },
    ],
    sweets: [
      {
        id: 7,
        name: 'Salted Caramel Crunch Cake',
        badge: 'Decadent',
        description: 'Moist dark chocolate layers filled with warm sea salt caramel and hazelnut praline crunch.',
        price: '৳380',
        rating: 4.9,
        reviews: 94,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
        tag: 'Dessert',
      },
      {
        id: 8,
        name: 'Fresh Belgian Chocolate Waffles',
        badge: 'House Special',
        description: 'Golden grid waffle topped with Belgian dark chocolate drizzle, fresh berries, and vanilla bean gelato.',
        price: '৳450',
        rating: 4.8,
        reviews: 82,
        image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=800',
        tag: 'Bakery',
      },
    ],
  };

  return (
    <section id="menu" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0c0c0c] border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3 px-3.5 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gastronomic Craft</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight">
              Crafted for the Craving.
            </h2>
          </motion.div>

          {/* Interactive Category Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 backdrop-blur-md bg-white/[0.04] p-1.5 rounded-full border border-white/10"
          >
            {categories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#d4af37] text-[#0f0f0f] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Menu Items Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {menuItems[activeCategory].map((dish, idx) => (
              <motion.div
                key={dish.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#d4af37]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col"
              >
                {/* Image & Badges */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/30" />

                  <div className="absolute top-4 left-4">
                    <span className="backdrop-blur-md bg-black/70 border border-white/10 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {dish.tag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="backdrop-blur-md bg-[#d4af37] text-[#0f0f0f] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {dish.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 backdrop-blur-md bg-black/80 border border-[#d4af37]/40 text-[#d4af37] text-lg font-bold px-4 py-1.5 rounded-xl shadow-lg">
                    {dish.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-3">
                      <Star className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
                      <span className="font-semibold text-white">{dish.rating}</span>
                      <span>({dish.reviews} reviews)</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-[#d4af37] transition-colors">
                      {dish.name}
                    </h3>

                    <p className="text-sm text-neutral-400 leading-relaxed font-normal mb-6">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-neutral-400">Available for Dine-in &amp; Pickup</span>
                    <a
                      href="#location"
                      className="text-xs font-semibold text-[#d4af37] hover:text-amber-300 flex items-center gap-1 transition-colors group-hover:translate-x-1 duration-300"
                    >
                      <span>Order Info</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
