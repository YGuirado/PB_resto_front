import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const photos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Plat Signature"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Notre Restaurant"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Dessert Raffiné"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Salle Principale"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Cuisine Créative"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Notre Bar"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">Notre Galerie</h2>

        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          stopOnHover={true}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          {photos.map((photo) => (
            <div key={photo.id} className="relative h-[70vh]">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                <p className="text-white text-2xl font-serif">{photo.title}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}