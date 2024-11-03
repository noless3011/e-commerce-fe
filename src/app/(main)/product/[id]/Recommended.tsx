'use client'; // Make this component a client component

import React from 'react';
import Product from './Product'; // Ensure the correct path to the Product component

const Recommended: React.FC = () => {
    // Sample prices for each product
    const prices = [29.99, 49.99, 19.99, 39.99, 59.99, 89.99, 24.99, 99.99];

    return (
        <div className="p-5 bg-white border border-gray-300 rounded-lg shadow-md mx-auto my-5 max-w-[100%]"> {/* Adjusted max width */}
            <h2 className="mb-5 text-black text-xl font-semibold">Recommended</h2>
            <div className="flex justify-start items-end gap-2 overflow-x-scroll pb-2 scrollbar-thin scrollbar-thumb-gray-400"> {/* Product list styles */}
                {['recommended1', 'recommended2', 'recommended3', 'recommended4', 'recommended5', 'recommended6', 'recommended7', 'recommended8'].map((img, index) => (
                    <Product
                        key={index}
                        img={img}
                        index={index}
                        price={prices[index]} // Pass the price to the Product
                        onHover={(isHovering) => {}} // Pass an empty handler or implement hover behavior
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommended;
