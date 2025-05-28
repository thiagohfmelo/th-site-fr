'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const navigateToStackCategory = (category: string) => {
    router.push(`/my-stack?category=${category}`);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between px-8">
        {}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-4xl font-bold font-mono tracking-tighter">
            thhq
          </h1>
          <p className="text-lg mt-1 text-zinc-400">
            web developer
          </p>
        </div>

        {}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xl font-mono">
          <li>
            <Link href="/" className="hover:text-gray-400 transition-colors duration-200">
              home
            </Link>
          </li>
          <li>
            <Link href="/who-am-i" className="hover:text-gray-400 transition-colors duration-200">
              about me
            </Link>
          </li>
          <li>
            <Link href="/my-work" className="hover:text-gray-400 transition-colors duration-200">
              my work
            </Link>
          </li>
          {}
          <li>
            <Link href="/game" className="hover:text-gray-400 transition-colors duration-200">
              game
            </Link>
          </li>
          {}
          <li
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="cursor-pointer hover:text-gray-400 transition-colors duration-200 flex items-center">
              my stack <span className="ml-1 text-base">▼</span>
            </span>
            <div
              className={`absolute left-0 mt-2 w-48 bg-zinc-800 text-white rounded-md shadow-lg py-2
                         ${isDropdownOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                         transition-all duration-200 ease-out z-10`}
            >
              <button
                onClick={() => navigateToStackCategory('All')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                All Stack
              </button>
              <button
                onClick={() => navigateToStackCategory('frontend')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                Frontend
              </button>
              <button
                onClick={() => navigateToStackCategory('backend')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                Backend
              </button>
              <button
                onClick={() => navigateToStackCategory('databases')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                Databases
              </button>
              <button
                onClick={() => navigateToStackCategory('tools')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                Tools & DevOps
              </button>
              <button
                onClick={() => navigateToStackCategory('design')}
                className="block w-full text-left px-4 py-2 text-lg hover:bg-zinc-700 transition-colors duration-150"
              >
                Design
              </button>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;