import React from 'react';
import { ArrowRight } from 'lucide-react';

const JournalView: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Decluttering: A Guide',
      category: 'Lifestyle',
      date: 'Oct 12, 2024',
      excerpt: 'How removing the non-essential can create space for what truly matters in your home and mind.',
      image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Sustainable Materials 101',
      category: 'Sustainability',
      date: 'Sep 28, 2024',
      excerpt: 'Understanding the difference between organic, recycled, and upcycled materials in modern manufacturing.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Morning Rituals for Focus',
      category: 'Wellness',
      date: 'Sep 15, 2024',
      excerpt: 'Start your day with intention. We explore five simple habits to boost productivity and calm.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">The Journal</h1>
        <p className="text-gray-600">
          Stories, interviews, and ideas on design, sustainability, and slow living.
        </p>
      </div>

      <div className="space-y-12">
        {articles.map((article) => (
          <div key={article.id} className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer border-b border-gray-100 pb-12 last:border-0">
            <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 pt-2">
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                <span className="text-black">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              <button className="text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalView;