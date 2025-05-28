// src/app/my-work/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'my work',
  description: 'Explore projects and work by Thiago.',
};

export default function MyWorkPage() {
  
  const projects = [
    {
      id: 1,
      title: 'Personal Website (th-site)',
      description: 'This very website! Built with Next.js, Tailwind CSS, and TypeScript. A minimalist portfolio to showcase my skills.',
      link: 'https://th-site', 
      github: 'https://github.com/thiagohfmelo/th-site', 
    },
    {
      id: 2,
      title: 'Project X - E-commerce Dashboard',
      description: 'A responsive e-commerce dashboard prototype featuring dynamic charts and data visualization. Developed with React and Recharts.',
      link: '#', 
      github: 'https://github.com/thiagohfmelo/project-x', 
    },
    {
      id: 3,
      title: 'Mobile App Concept - Task Manager',
      description: 'UI/UX design and frontend implementation for a simple task management mobile application, using React Native.',
      link: '#', 
      github: 'https://github.com/thiagohfmelo/task-manager-app',
    },
  ];

  return (
    <section className="text-white py-8">
      <div className="max-w-2xl"> {}
        <h2 className="text-3xl font-bold mb-6 font-mono">my work.</h2>

        <div className="space-y-8"> {}
          {projects.map((project) => (
            <div key={project.id} className="border-b border-zinc-700 pb-8 last:border-b-0 last:pb-0"> {/* Borda inferior para separar, exceto no último */}
              <h3 className="text-2xl font-semibold mb-2 font-mono">{project.title}</h3>
              <p className="text-lg leading-relaxed text-zinc-300 mb-3">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg underline"
                  >
                    view project
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-lg underline"
                  >
                    github repo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}