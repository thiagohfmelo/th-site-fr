'use client'; 

import type { Metadata } from 'next'; 
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation'; 

export default function MyStackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All'; 

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);

  
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || 'All';
    if (categoryFromUrl !== activeCategory) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams, activeCategory]);

  
  const stackCategories = [
    {
      id: 'All',
      category: 'All',
      items: [],
    },
    {
      id: 'frontend',
      category: 'Frontend',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 'backend',
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Python', 'Django/Flask (Learning)', 'REST APIs'],
    },
    {
      id: 'databases',
      category: 'Databases',
      items: ['MongoDB (Learning)', 'PostgreSQL (Learning)', 'MicrosoftSQL Server'],
    },
    {
      id: 'tools',
      category: 'Tools & DevOps',
      items: ['Git', 'GitHub', 'VS Code', 'Docker (Learning)', 'Vercel', 'Netlify'],
    },
    {
      id: 'design',
      category: 'Design',
      items: ['Figma', 'Responsive Design Principles'],
    },
  ];

  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  
    router.push(`/my-stack?category=${category}`, { scroll: false });
  };

  
  const filteredCategories = activeCategory === 'All'
    ? stackCategories.filter(cat => cat.id !== 'All') 
    : stackCategories.filter(cat => cat.id === activeCategory);

  return (
    <section className="text-white py-8">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 font-mono">my stack.</h2>

        {/* Botões de filtro para mobile ou acesso rápido */}
        <div className="mb-8 flex flex-wrap gap-3">
          {stackCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-4 py-2 rounded-md transition-colors duration-200
                ${activeCategory === cat.id
                  ? 'bg-gray-600 text-white'
                  : 'bg-zinc-700 hover:bg-zinc-600 text-zinc-200'
                }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id}> {/* Adicionado ID para navegação por âncora se quiser */}
                <h3 className="text-2xl font-semibold mb-3 font-mono text-zinc-400">{cat.category}</h3>
                <ul className="list-disc list-inside space-y-1 text-lg leading-relaxed">
                  {cat.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="text-xl text-zinc-400">Select a category to view stack items.</p>
          )}
        </div>
      </div>
    </section>
  );
}