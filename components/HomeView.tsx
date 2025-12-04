import React from 'react';
import Hero from './Hero';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface HomeViewProps {
  addToCart: (product: Product) => void;
  onNavigate: (page: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ addToCart, onNavigate }) => {
  return (
    <div className="animate-fade-in-up">
      <Hero onNavigate={onNavigate} />
      
      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-2">Curated Arrivals</h2>
            <p className="text-gray-500">Handpicked for the season.</p>
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="hidden md:block text-sm font-medium border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors bg-transparent cursor-pointer"
          >
            View All Products
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {PRODUCTS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart} 
            />
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
           <button 
             onClick={() => onNavigate('shop')}
             className="text-sm font-medium border-b border-black pb-0.5 bg-transparent cursor-pointer"
           >
            View All Products
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white border-t border-gray-100 py-24">
         <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Join our community</h2>
            <p className="text-gray-500 mb-8">Sign up for exclusive offers, early access to new collections, and design inspiration.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
              />
              <button className="px-8 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default HomeView;