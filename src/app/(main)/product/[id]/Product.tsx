// Product.tsx
import React from 'react';

interface ProductProps {
    img: string;
    index: number;
    price: number; // Price prop
    onHover: (isHovering: boolean) => void;
}

const Product: React.FC<ProductProps> = ({ img, index, price, onHover }) => {
    return (
        <div
            className="flex flex-col justify-between items-center text-center p-2 bg-gray-100 border border-gray-300 rounded-md transition-shadow duration-300 hover:shadow-lg h-52"
            style={{ width: '160px', minWidth: '160px' }} // Set fixed width to 400 pixels
            onMouseEnter={() => onHover(true)} // Trigger hover state
            onMouseLeave={() => onHover(false)} // Reset hover state
        >
            <img
                src={`/${img}.jpg`} // Image source
                alt={`Item ${index + 1}`} // Alt text for accessibility
                className="w-full h-auto rounded-md mb-2" // Image styles
            />
            <div className="flex flex-col items-center"> {/* Wrapper for product name and price */}
                <a
                    href="#" // Link to product details
                    className="text-black font-bold hover:underline mb-1" // Styles for product name
                >
                    Product {index + 1}
                </a>
                <div className="text-gray-700 font-semibold"> {/* Styles for product price */}
                    ${price.toFixed(2)} {/* Format price to two decimal places */}
                </div>
            </div>
        </div>
    );
};

export default Product;
