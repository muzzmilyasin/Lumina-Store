import React from 'react';

const CollectionsView: React.FC = () => {
  const collections = [
    {
      id: 1,
      title: 'The Home Office',
      description: 'Productivity meets aesthetics. Essentials for a focused workspace.',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Summer Escapes',
      description: 'Lightweight materials and breathable fabrics for your next journey.',
      image: 'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Urban Minimalist',
      description: 'Clean lines and monochromatic tones for city living.',
      image: 'https://images.unsplash.com/photo-1517581177697-a06a184812a0?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">Collections</h1>
        <p className="text-gray-600">
          Explore our thoughtfully curated series, designed to bring cohesion and calm to specific aspects of your life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection) => (
          <div key={collection.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-4">
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-1">{collection.title}</h3>
            <p className="text-sm text-gray-500">{collection.description}</p>
            <button className="mt-4 text-sm font-medium border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
              Explore Collection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsView;