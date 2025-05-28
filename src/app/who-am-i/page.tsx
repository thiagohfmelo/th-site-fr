// src/app/who-am-i/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'about me',
  description: 'Learn more about Thiago.',
};

export default function WhoAmIPage() {
  return (
    <section className="text-white py-8">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold mb-4 font-mono">who am i.</h2>
        <p className="text-lg leading-relaxed mb-4">
          I'm Thiago, a 18 year old developer and web designer passionate about creating clean, efficient, and beautiful web experiences. I love working with modern technologies like Next.js, React, and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          I'm currently a Internet Systems student at UNICAP and my journey into programming started in my high school, learning through documentation, online courses, and a lot of trial and error. I enjoy solving problems and bringing ideas to life through code.
        </p>
        <p className="text-lg leading-relaxed">
          When I'm not coding, you can usually find me exploring new music, learning about coding, or just relaxing with friends.
        </p>
        {}
      </div>
    </section>
  );
}