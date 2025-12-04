import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';
import { PRODUCTS } from '../constants';

interface ShopViewProps {
  addToCart: (product: Product) => void;
}

const ShopView: React.FC<ShopViewProps> = ({ addToCart }) => {
  // Clone the products list to create 16 items total (8 * 2)
  const shopProducts = [...PRODUCTS, ...PRODUCTS];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Shop All</h1>
        <p className="text-gray-600 max-w-2xl">
          Explore our complete collection of minimalist essentials. 
          Designed for longevity, crafted with care.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {shopProducts.map((product, index) => (
          <ProductCard 
            key={`${product.id}-${index}`} 
            product={product} 
            onAddToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default ShopView;