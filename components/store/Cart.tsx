import React from 'react';
import { Product } from '../../types';

interface CartProps {
  items: Product[];
  onRemove: (index: number) => void;
  onCheckout: () => void;
}

export const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
        Mi Carrito 
        <span className="text-lg font-normal text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{items.length} productos</span>
      </h2>
      
      {items.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-200">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <span className="material-symbols-outlined text-4xl text-slate-300">shopping_cart_off</span>
            </div>
          <p className="text-slate-500 font-medium">Tu carrito está vacío.</p>
          <button onClick={onCheckout} className="mt-6 text-primary font-bold hover:underline">Volver a la tienda</button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-4">
            {items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex gap-6 p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="w-24 h-24 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-100">
                  <img src={item.image} alt={item.name} className="max-h-full max-w-full p-2 object-contain" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-slate-900 text-sm leading-snug max-w-[80%]">{item.name}</h3>
                        <button onClick={() => onRemove(index)} className="text-slate-400 hover:text-kasa-red transition-colors">
                            <span className="material-symbols-outlined text-lg">delete</span>
                        </button>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-bold">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50 opacity-50 cursor-not-allowed" title="Cantidad fija en demo">
                        <span className="px-2 py-1 text-slate-400">-</span>
                        <span className="text-xs font-bold px-2">1</span>
                        <span className="px-2 py-1 text-slate-400">+</span>
                    </div>
                    <p className="font-black text-lg">${item.price.toLocaleString('es-AR')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="w-full lg:w-96">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-28">
              <h3 className="font-bold text-lg mb-6 border-b border-slate-100 pb-4">Resumen de compra</h3>
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>${total.toLocaleString('es-AR')}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Envío</span>
                  <span className="text-kasa-green font-bold">Gratis</span>
                </div>
                <div className="flex justify-between font-black text-xl text-slate-900 pt-4 border-t border-slate-100">
                  <span>Total</span>
                  <span>${total.toLocaleString('es-AR')}</span>
                </div>
              </div>
              <button className="w-full bg-kasa-green hover:bg-[#007038] text-white py-4 rounded-xl font-bold shadow-lg shadow-kasa-green/20 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">lock</span>
                FINALIZAR COMPRA
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-4 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-xs">verified_user</span> Compra protegida con SSL
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};