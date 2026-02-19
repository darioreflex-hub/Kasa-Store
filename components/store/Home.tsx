import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';

interface HomeProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const Home: React.FC<HomeProps> = ({ products, onAddToCart }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] bg-slate-900 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGHuc0R7DZkrLe9Oe7mgzzOMORYMM2j6m0W2szs0ZPpi2rcgXDZUms-RTHNklIAko7bcxWYu5UgIUIm8uZ7IQ2pgcZYO6HN8wIQoUvUPAn-oeWkMLE35DSfraIdfK8T7l-rZVMxMKS2nMV9-tecLC4jZ-kmR-gyAI8t5ay4Ii3XUEv5TdeBjHNigImUwSSmlaFTcVpL7JPystY3nBYvAvXBkF-8EP-kQ1oxshKbP6dfmD72wNbWEaHV_xSB4mTm8S-syAP_swetfDs')"}}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-10 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <span className="inline-block bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 rounded-sm">
                Colección 2024
            </span>
            <h1 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Renová tu hogar <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">con lo último en tecnología.</span>
            </h1>
            <p className="text-lg text-slate-300 mb-10 font-light max-w-lg leading-relaxed">
              Descubrí nuestra nueva línea de electrodomésticos inteligentes diseñados para simplificar tu vida con estilo y eficiencia.
            </p>
            <div className="flex gap-4">
              <button className="bg-primary hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                Ver Ofertas 
                <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 rounded-xl font-bold transition-all">
                Más Información
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-10">
            <div className="flex justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide">
                {['Heladeras', 'Lavado', 'Cocina', 'Climatización', 'Pequeños', 'Tecnología'].map((cat) => (
                    <div key={cat} className="flex flex-col items-center group cursor-pointer min-w-[100px]">
                        <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all shadow-sm border border-slate-100">
                            <span className="material-symbols-outlined text-3xl">kitchen</span>
                        </div>
                        <span className="text-xs font-bold text-slate-600 uppercase tracking-wide group-hover:text-primary transition-colors">{cat}</span>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Ofertas Destacadas</h2>
              <p className="text-slate-500 mt-2">Los mejores precios del mercado en tecnología para el hogar.</p>
            </div>
            <a href="#" className="text-primary font-bold hover:underline flex items-center gap-1 text-sm">
                Ver todo el catálogo <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};