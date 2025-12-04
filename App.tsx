import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CartSidebar from './components/CartSidebar';
import AIChat from './components/AIChat';
import HomeView from './components/HomeView';
import ShopView from './components/ShopView';
import CollectionsView from './components/CollectionsView';
import AboutView from './components/AboutView';
import JournalView from './components/JournalView';
import { CartItem, Product } from './types';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home');

  // Cart Logic
  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView addToCart={addToCart} onNavigate={setCurrentView} />;
      case 'shop':
        return <ShopView addToCart={addToCart} />;
      case 'collections':
        return <CollectionsView />;
      case 'about':
        return <AboutView />;
      case 'journal':
        return <JournalView />;
      default:
        return <HomeView addToCart={addToCart} onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 selection:bg-black selection:text-white">
      <Navbar 
        cartItems={cartItems} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={setCurrentView}
      />
      
      <main>
        {renderView()}

        {/* Footer - Shared across all views */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-500">© 2024 Lumina Store. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="text-sm text-gray-400 hover:text-black transition-colors bg-transparent cursor-pointer">Privacy</button>
              <button className="text-sm text-gray-400 hover:text-black transition-colors bg-transparent cursor-pointer">Terms</button>
              <button className="text-sm text-gray-400 hover:text-black transition-colors bg-transparent cursor-pointer">Instagram</button>
            </div>
          </div>
        </footer>
      </main>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
      
      <AIChat />
    </div>
  );
};

export default App;