"use client";
import React from "react";

interface Item {
  id: number;
  name: string;
  price: string;
  category: string;
  freeShipping: boolean;
  imageUrl: string;
}

const ItemsResult: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: "$50",
      category: "Electronics",
      freeShipping: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Designer T-Shirt",
      price: "$30",
      category: "Fashion",
      freeShipping: false,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Vacuum Cleaner",
      price: "$100",
      category: "Home",
      freeShipping: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Vacuum Cleaner",
      price: "$100",
      category: "Home",
      freeShipping: true,
      imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 5,
        name: "Vacuum Cleaner",
        price: "$100",
        category: "Home",
        freeShipping: true,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 6,
        name: "Vacuum Cleaner",
        price: "$100",
        category: "Home",
        freeShipping: true,
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 7,
        name: "Vacuum Cleaner",
        price: "$100",
        category: "Home",
        freeShipping: true,
        imageUrl: "https://via.placeholder.com/150",
    },     
  ];

  return (
    <div className="container mx-auto max-w-4xl bg-white rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-4 border border-gray-300 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-medium text-gray-700">{item.name}</h3>
            <p className="text-gray-500">{item.category}</p>
            <p className="text-green-600 font-bold">{item.price}</p>
            {item.freeShipping && (
              <p className="text-sm text-yellow-500">Free Shipping</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemsResult;