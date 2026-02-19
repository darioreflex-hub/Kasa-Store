import React from 'react';

interface StoreLayoutProps {
  children: React.ReactNode;
  onNavigate: (view: 'store' | 'admin' | 'cart') => void;
  cartCount: number;
}

export const StoreLayout: React.FC<StoreLayoutProps> = ({ children, onNavigate, cartCount }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Bar */}
      <div className="bg-black text-white text-xs py-2 px-4 text-center font-medium tracking-wide uppercase">
        Envío gratis a todo el país en productos seleccionados • Cuotas sin interés • Garantía Oficial
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-slate-100">
        <div className="container mx-auto px-4 lg:px-10 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => onNavigate('store')}>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">kitchen</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter leading-none text-slate-900">KASA</span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary">Electro</span>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden md:block flex-1 max-w-2xl relative">
            <input 
              className="w-full bg-slate-100 text-slate-900 rounded-full py-2.5 px-12 focus:ring-2 focus:ring-primary border-none text-sm" 
              placeholder="¿Qué estás buscando para tu hogar?" 
              type="text"
            />
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button 
                onClick={() => onNavigate('admin')}
                className="hidden lg:flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-primary transition-colors border border-slate-200 px-3 py-1.5 rounded-full"
            >
                <span className="material-symbols-outlined text-sm">admin_panel_settings</span>
                Admin View
            </button>
            <div className="flex items-center gap-4">
              <button className="text-slate-600 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-2xl">person</span>
              </button>
              <button 
                className="text-slate-600 hover:text-primary transition-colors relative"
                onClick={() => onNavigate('cart')}
              >
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                {cartCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-kasa-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <span className="material-symbols-outlined text-2xl">kitchen</span>
                        <span className="font-bold text-lg">KASA</span>
                    </div>
                    <p className="text-sm">Expertos en tecnología para el hogar desde 1995.</p>
                </div>
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Ayuda</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Centro de Ayuda</li>
                        <li>Garantías</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-slate-800 mt-12 pt-8 text-xs text-center">
                © 2024 KASA Electro & Cocina. Todos los derechos reservados.
            </div>
        </div>
      </footer>
    </div>
  );
};