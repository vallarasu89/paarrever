import React from 'react';
import { Product } from '@/types/product';
import { Button } from '@/components/common/Button/Button';
import { formatCurrency } from '@/utils/helpers';
import { X, CheckCircle, MapPin, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#570B26]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-xl shadow-2xl border border-[#EADDE2] max-w-2xl w-full overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Close */}
          <div className="absolute top-4 right-4 z-20">
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-2 rounded-full bg-[#FFF9F0]/80 hover:bg-[#FFF9F0] text-[#292329] shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#7A1034]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-y-auto p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {/* Image Preview */}
              <div className="relative rounded-lg overflow-hidden bg-[#F7EAF0] aspect-square border border-[#EADDE2]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.isBestseller && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#7A1034] text-[#FCE2A9] text-xs font-semibold uppercase tracking-wider">
                    Neighborhood Bestseller
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#7A1034] font-semibold block">
                    {product.categoryName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#570B26] leading-snug mt-1">
                    {product.name}
                  </h3>
                  {product.tamilName && (
                    <p className="text-sm font-sans text-[#7A1034] font-medium mt-0.5">
                      {product.tamilName}
                    </p>
                  )}
                </div>

                <div className="flex items-baseline gap-3 pt-1 border-t border-[#EADDE2]">
                  <span className="text-2xl font-serif font-bold text-[#570B26]">
                    {formatCurrency(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-sans line-through text-[#766A70]">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  )}
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#F7EAF0] text-[#7A1034]">
                    {product.weight}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-charcoal/80 font-sans leading-relaxed">
                  {product.description}
                </p>

                {product.origin && (
                  <div className="flex items-center gap-2 text-xs font-sans text-[#7A1034] font-medium bg-cream/70 p-2.5 rounded-md border border-border">
                    <MapPin className="w-4 h-4 text-gold shrink-0" />
                    <span>Origin: {product.origin}</span>
                  </div>
                )}

                {product.nutritionalHighlights && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-semibold text-charcoal uppercase tracking-wider block">
                      Quality Highlights:
                    </span>
                    {product.nutritionalHighlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-grey">
                        <CheckCircle className="w-3.5 h-3.5 text-[#7A1034] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#7A1034]">
                <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                <span>In stock across all 25+ Chennai retail locations</span>
              </div>
              <Button variant="primary" onClick={onClose} size="sm">
                Got it, Continue Browsing
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
