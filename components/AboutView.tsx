import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">Designed for Living.</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lumina was born from a simple idea: that the objects we surround ourselves with should bring peace, not clutter. In a world of noise, we choose silence. In a world of excess, we choose essence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable</h3>
              <p className="text-sm text-gray-500">
                We believe in responsible consumption. Every product is crafted with materials that are kind to the planet and built to last.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeless</h3>
              <p className="text-sm text-gray-500">
                Trends fade, but good design is eternal. We create pieces that transcend seasons, becoming staples in your life for years to come.
              </p>
            </div>
          </div>

          <div className="pt-4">
             <div className="flex items-center gap-4">
               <div className="h-px bg-gray-200 flex-1"></div>
               <span className="text-xs uppercase tracking-widest text-gray-400">Est. 2024</span>
               <div className="h-px bg-gray-200 flex-1"></div>
             </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[600px] bg-gray-100 rounded-2xl overflow-hidden">
           <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80" 
            alt="Design Studio" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutView;