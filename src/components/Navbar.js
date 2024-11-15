import React, { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <MenuIcon className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-2xl font-serif font-bold">
              Palm Beer
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className="text-gray-700 hover:text-amber-600 transition"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-amber-600 transition"
            >
              À propos
            </a>
            <a
              href="#gallery"
              className="text-gray-700 hover:text-amber-600 transition"
            >
              Galerie
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-amber-600 transition"
            >
              Contact
            </a>
            <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Réserver
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a
              href="#menu"
              className="block text-gray-700 hover:text-amber-600 transition py-2"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block text-gray-700 hover:text-amber-600 transition py-2"
            >
              À propos
            </a>
            <a
              href="#gallery"
              className="block text-gray-700 hover:text-amber-600 transition py-2"
            >
              Galerie
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-amber-600 transition py-2"
            >
              Contact
            </a>
            <button className="w-full bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition">
              Réserver
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
