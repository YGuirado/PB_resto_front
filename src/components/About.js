import React from "react";
import { Star, Users, Utensils } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Excellence Culinaire",
    description:
      "Notre chef étoilé crée des plats d'exception qui subliment les produits locaux et de saison.",
  },
  {
    icon: Users,
    title: "Service Attentionné",
    description:
      "Notre équipe passionnée s'engage à vous offrir une expérience gastronomique mémorable.",
  },
  {
    icon: Utensils,
    title: "Tradition & Innovation",
    description:
      "Une cuisine française authentique revisitée avec une touche de modernité.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Notre Histoire</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Depuis 1985, Le Gourmet perpétue l'excellence de la gastronomie
            française dans un cadre élégant et chaleureux au cœur de Paris.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center">
          <div
            className="h-96 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            }}
          />
          <div className="space-y-6">
            <h3 className="text-3xl font-serif">
              Une Passion pour la Gastronomie
            </h3>
            <p className="text-gray-600">
              Notre chef et son équipe sélectionnent chaque jour les meilleurs
              produits pour vous offrir une expérience gastronomique
              d'exception. La cuisine du Gourmet célèbre l'heritage culinaire
              français tout en embrassant l'innovation.
            </p>
            <p className="text-gray-600">
              Chaque plat est une création unique qui raconte une histoire,
              celle de notre passion pour la gastronomie et notre engagement
              envers l'excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
