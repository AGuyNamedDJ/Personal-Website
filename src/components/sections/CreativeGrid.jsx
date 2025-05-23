// src/components/CreativeGrid.jsx
"use client";

export default function CreativeGrid() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 bg-black">
      <p className="text-4xl font-semibold mb-8 text-center text-white">Photography</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="aspect-[4/5] w-full bg-neutral-800 overflow-hidden flex items-center justify-center"
          >
            {/* Placeholder square */}
          </div>
        ))}
      </div>
    </div>
  );
}