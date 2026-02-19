import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group flex flex-col h-full">
      <div className="relative p-6 bg-white flex justify-center items-center h-64 overflow-hidden">
        {product.discount && (
          <span className="absolute top-3 left-3 bg-kasa-red text-white text-xs font-black px-2 py-1 rounded shadow-sm z-10">
            {product.discount}% OFF
          </span>
        )}
        <img 
          alt={product.name} 
          className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply" 
          src={product.image} 
        />
      </div>
      <div className="p-5 flex flex-col flex-1 border-t border-slate-50">
        <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">{product.category}</p>
        <h3 className="text-sm font-semibold text-slate-900 mb-4 leading-tight line-clamp-2 flex-1">
          {product.name}
        </h3>
        <div className="mt-auto">
          <div className="flex flex-col mb-3">
            {product.originalPrice && (
              <span className="text-xs text-slate-400 line-through">
                ${product.originalPrice.toLocaleString('es-AR')}
              </span>
            )}
            <div className="flex items-center gap-2">
                <span className="text-2xl font-black text-slate-900">
                ${product.price.toLocaleString('es-AR')}
                </span>
                <span className="text-[10px] text-kasa-green font-bold bg-kasa-green/10 px-1.5 rounded">6x SIN INTERÉS</span>
            </div>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="w-full bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-sm font-bold">add_shopping_cart</span> 
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};