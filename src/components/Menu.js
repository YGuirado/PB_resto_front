import React from "react";

const menuItems = [
  {
    category: "Entrées",
    items: [
      {
        name: "Soupe à l'oignon",
        price: "12€",
        description: "Gratinée au fromage, croûtons maison",
      },
      {
        name: "Foie Gras Maison",
        price: "18€",
        description: "Chutney de figues, pain brioché toasté",
      },
    ],
  },
  {
    category: "Plats",
    items: [
      {
        name: "Magret de Canard",
        price: "28€",
        description: "Sauce aux fruits rouges, purée de pommes de terre",
      },
      {
        name: "Bar en Croûte de Sel",
        price: "32€",
        description: "Légumes de saison, beurre blanc",
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Crème Brûlée",
        price: "10€",
        description: "À la vanille de Madagascar",
      },
      {
        name: "Tarte Tatin",
        price: "12€",
        description: "Glace vanille, caramel au beurre salé",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16">Notre Menu</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {menuItems.map((section) => (
            <div key={section.category} className="space-y-8">
              <h3 className="text-2xl font-serif text-amber-600 mb-6">
                {section.category}
              </h3>
              {section.items.map((item) => (
                <div key={item.name} className="border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-medium">{item.name}</h4>
                    <span className="text-amber-600 font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
