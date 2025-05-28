// src/app/my-stack/loading.tsx
import React from 'react';

export default function Loading() {
  return (
    <section className="text-white py-8">
      <div className="max-w-2xl text-center">
        <p className="text-xl font-mono">Loading stack items...</p>
        {}
        {}
        <div className="mt-4 w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
      </div>
    </section>
  );
}