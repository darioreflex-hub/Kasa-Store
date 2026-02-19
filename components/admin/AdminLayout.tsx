import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
  onNavigate: (view: 'store' | 'admin') => void;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, onNavigate }) => {
  return (
    <div className="flex min-h-screen bg-background-light font-display">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-50">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-xl">admin_panel_settings</span>
          </div>
          <div>
            <h1 className="text-lg font-bold leading-none">KASA Admin</h1>
            <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Panel de Control</p>
          </div>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 bg-primary text-white rounded-lg transition-colors text-left">
            <span className="material-symbols-outlined text-sm">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-left">
            <span className="material-symbols-outlined text-sm">inventory_2</span>
            <span className="text-sm font-medium">Productos</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-left">
            <span className="material-symbols-outlined text-sm">shopping_cart</span>
            <span className="text-sm font-medium">Pedidos</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors text-left">
            <span className="material-symbols-outlined text-sm">group</span>
            <span className="text-sm font-medium">Clientes</span>
          </button>
        </nav>

        <div className="p-4 border-t border-slate-800">
            <button 
                onClick={() => onNavigate('store')}
                className="flex items-center justify-center w-full gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold transition-all"
            >
                <span className="material-symbols-outlined text-sm">storefront</span>
                Ver Tienda
            </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Dashboard General</h2>
                <p className="text-slate-500 text-sm">Resumen de actividad y rendimiento.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-kasa-green animate-pulse"></span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Sistema Online</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
                    AD
                </div>
            </div>
        </header>
        {children}
      </main>
    </div>
  );
};