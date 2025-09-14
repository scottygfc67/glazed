'use client';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { memo } from 'react';

type Props = {
  unitPrice: number;             // e.g., 29.99 from product
  qty: number;
  setQty: (n: number) => void;
  pairPrice?: number;            // default 29.99
};

const QuantityBreaks = memo(function QuantityBreaks({ unitPrice, qty, setQty, pairPrice = 29.99 }: Props) {

  const tiers = [
    { qty: 1, label: '1 bottle', price: `£${unitPrice.toFixed(2)}` },
    { qty: 2, label: '2 bottles', price: `£${pairPrice.toFixed(2)}`, featured: true, badge: 'Best value', sub: `≈ £${(pairPrice/2).toFixed(2)} each` },
    { qty: 4, label: '4 bottles', price: `£${(pairPrice*2).toFixed(2)}`, sub: 'Auto‑applied as two 2‑packs' },
  ];

  return (
    <div className="space-y-4">
      {/* Tiers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        {tiers.map((t) => {
          const active = qty === t.qty;
          return (
            <motion.button
              key={t.qty}
              onClick={() => setQty(t.qty)}
              whileTap={{ scale: 0.98 }}
              className={clsx(
                'relative rounded-xl border p-3 sm:p-4 text-left transition-all shadow-sm hover:shadow-md min-h-[80px] flex flex-col justify-between',
                active 
                  ? 'border-pink-500 ring-2 ring-pink-200 bg-white' 
                  : t.featured
                    ? 'border-pink-300 bg-pink-50 hover:border-pink-400 hover:bg-pink-100'
                    : 'border-neutral-200 bg-white/70 hover:border-pink-300'
              )}
              aria-pressed={active}
            >
              {/* Best value sticker overlay */}
              {t.featured && (
                <div className="absolute -top-1 -right-1 z-10 inline-flex items-center text-xs font-bold text-white bg-pink-500 rounded-full px-2 py-1 shadow-lg">
                  ⭐ Best value
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="font-medium text-ink text-sm sm:text-base">{t.label}</div>
                <div className={clsx(
                  'font-semibold text-sm sm:text-base',
                  t.featured ? 'text-pink-600 sm:text-lg' : 'text-ink'
                )}>{t.price}</div>
              </div>
              {t.sub && <div className="text-xs text-muted mt-1">{t.sub}</div>}
            </motion.button>
          );
        })}
      </div>


    </div>
  );
});

export default QuantityBreaks;
