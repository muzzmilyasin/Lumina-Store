import React from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { CartItem } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  onOpenCart: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartItems, onOpenCart, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Common button styles to replace links
  const navLinkClass = "text-gray-500 hover:text-black transition-colors text-sm font-medium bg-transparent border-none cursor-pointer";
  const mobileNavLinkClass = "block px-3 py-2 text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 text-left w-full bg-transparent border-none cursor-pointer";

  const handleNav = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <button onClick={() => handleNav('home')} className="text-2xl font-bold tracking-tight text-gray-900 bg-transparent border-none p-0 cursor-pointer">LUMINA</button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNav('shop')} className={navLinkClass}>Shop</button>
            <button onClick={() => handleNav('collections')} className={navLinkClass}>Collections</button>
            <button onClick={() => handleNav('about')} className={navLinkClass}>About</button>
            <button onClick={() => handleNav('journal')} className={navLinkClass}>Journal</button>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-black transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button 
              onClick={onOpenCart}
              className="relative text-gray-900 hover:text-gray-600 transition-colors"
            >
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 p-1"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => handleNav('shop')} className={mobileNavLinkClass}>Shop</button>
            <button onClick={() => handleNav('collections')} className={mobileNavLinkClass}>Collections</button>
            <button onClick={() => handleNav('about')} className={mobileNavLinkClass}>About</button>
            <button onClick={() => handleNav('journal')} className={mobileNavLinkClass}>Journal</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;