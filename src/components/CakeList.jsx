import React from "react";
import CakeCard from "./CakeCard";

const cakeData = [
  {
    name: "Chocolate Cake",
    image: "https://example.com/chocolate-cake.jpg",
    description: "Rich and creamy chocolate delight.",
  },
  {
    name: "Strawberry Cake",
    image: "https://example.com/strawberry-cake.jpg",
    description: "Fresh strawberries and whipped cream.",
  },
  {
    name: "Red Velvet Cake",
    image: "https://example.com/red-velvet.jpg",
    description: "Smooth, vibrant, and irresistible.",
  },
  {
    name: "Vanilla Cake",
    image: "https://example.com/vanilla-cake.jpg",
    description: "Classic vanilla with buttercream frosting.",
  },
];

const CakeList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {cakeData.map((cake, index) => (
        <CakeCard
          key={index}
          image={cake.image}
          name={cake.name}
          description={cake.description}
        />
      ))}
    </div>
  );
};

export default CakeList;
