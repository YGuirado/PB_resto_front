import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Une Expérience Culinaire Unique
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Découvrez une cuisine française raffinée dans une ambiance élégante
            et chaleureuse
          </p>
          <div className="space-x-4">
            <a
              href="#"
              className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition"
            >
              Réserver une table
            </a>
            <a
              href="#menu"
              className="bg-white text-amber-600 px-8 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Voir le menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
