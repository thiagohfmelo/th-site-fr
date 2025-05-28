'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaDiscord, FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function HomePage() {
  const [currentTime, setCurrentTime] = useState<string>('');
  const currentLocation: string = 'Brazil'; // Já corrigido para const

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
      setCurrentTime(formattedTime);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="text-white py-8">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4 font-mono">welcome.</h2>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to my website. You can find my projects, music, social media and some info about me here.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          {"I'm"} online and {"it's"} <span className="font-bold">{currentTime}</span> in <span className="font-bold">{currentLocation}</span>.
        </p>
        {}

        <div className="flex space-x-6 mb-10">
          <a href="https://github.com/thiagohfmelo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaGithub size={30} />
          </a>
          <a href="https://discord.com/invite/thhq" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaDiscord size={30} />
          </a>
          <a href="mailto:thiagohfmelo2@gmail.com" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaEnvelope size={30} />
          </a>
          <a href="https://linkedin.com/in/thiagohfmelo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition-colors duration-200">
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="flex items-center text-gray-500 text-lg">
          <span className="mr-3 text-2xl">...</span> currently not listening
        </div>
        {}
        {}
      </div>
    </section>
  );
}