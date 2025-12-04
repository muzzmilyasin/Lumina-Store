import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative pt-16 pb-16 md:pt-32 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content with Animation */}
          <div className="flex-1 text-center md:text-left z-10">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-500 uppercase bg-gray-100 rounded-full animate-fade-in-up">
              New Collection 2024
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight animate-fade-in-up delay-100">
              Minimalist <br /> 
              <span className="text-gray-400">Essentials.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0 animate-fade-in-up delay-200">
              Discover a curated selection of timeless goods designed to elevate your everyday life through simplicity and function.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-300">
              <button 
                onClick={() => onNavigate('shop')}
                className="px-8 py-4 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('collections')}
                className="px-8 py-4 bg-white text-black border border-gray-200 text-sm font-medium rounded-full hover:border-black transition-all cursor-pointer"
              >
                Collections
              </button>
            </div>
          </div>

          {/* Image/Visual with Float Animation */}
          <div className="flex-1 relative w-full h-[400px] md:h-[600px] animate-fade-in-up delay-200">
             {/* Abstract background shapes */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-gray-100 to-transparent rounded-full opacity-50 blur-3xl -z-10"></div>
             
             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500 ease-out">
                <img 
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80&fm=png" 
                  alt="Minimalist Lifestyle" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 md:bg-transparent"></div>
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white p-6 shadow-xl rounded-xl hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Premium Quality</p>
                    <p className="text-xs text-gray-500">Sustainably Sourced</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;