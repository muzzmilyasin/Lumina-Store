import React from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-gray-100 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
      <div className="aspect-square w-full overflow-hidden bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        {/* Quick Add Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="absolute bottom-4 right-4 h-10 w-10 bg-white text-black rounded-full shadow-md flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white z-10"
          aria-label="Add to cart"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-500 mb-1">{product.category}</p>
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;