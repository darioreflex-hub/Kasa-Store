import React, { useState, useEffect } from 'react';
import { ViewState, Product } from './types';
import { PRODUCTS } from './constants';
import { StoreLayout } from './components/store/StoreLayout';
import { Home } from './components/store/Home';
import { Cart } from './components/store/Cart';
import { AdminLayout } from './components/admin/AdminLayout';
import { Dashboard } from './components/admin/Dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('store');
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleNavigate = (newView: ViewState) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product) => {
    setCartItems(prev => [...prev, product]);
    alert(`${product.name} agregado al carrito`);
  };

  const removeFromCart = (indexToRemove: number) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  useEffect(() => {
    console.log("App initialized"); 
  }, []);

  if (view === 'admin') {
    return (
      <AdminLayout onNavigate={handleNavigate}>
        <Dashboard />
      </AdminLayout>
    );
  }

  return (
    <StoreLayout onNavigate={handleNavigate} cartCount={cartItems.length}>
      {view === 'store' && (
        <Home products={PRODUCTS} onAddToCart={addToCart} />
      )}
      {view === 'cart' && (
        <Cart 
            items={cartItems} 
            onRemove={removeFromCart} 
            onCheckout={() => alert('¡Gracias por tu compra! (Demo)')} 
        />
      )}
    </StoreLayout>
  );
};

export default App;