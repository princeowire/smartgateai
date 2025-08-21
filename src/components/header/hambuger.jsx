'use client';

import React from 'react';

const Hambuger = () => {
  return (
    <button
      className="ml-16 relative flex h-7 w-7 flex-col items-center justify-center text-white focus:outline-none"
      aria-label="Menu"
    >
      {/* Top line */}
      <span className="block h-0.5 w-6 bg-current mb-1" />

      {/* Middle line */}
      <span className="block h-0.5 w-6 bg-current mb-1" />

      {/* Bottom line */}
      <span className="block h-0.5 w-6 bg-current" />
    </button>
  );
};

export default Hambuger;
