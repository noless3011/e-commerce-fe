import React from 'react';
import Product from '@/app/types/Product';
import Link from 'next/link';

type ProductProps = {
    product: Product;
};

const ProductSideBar: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="max-w-xl h-full p-6 bg-gray-100 rounded-lg">
            <h1 className="text-lg font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
                <div className="w-10 aspect-square bg-gray-300 rounded-full mr-4"></div>
                <div>
                    {/* Assuming you have a way to fetch the shop name based on product.ownerId */}
                    <div className="text-sm font-semibold">Shop ID: {product.ownerId} {/* Replace with actual shop name */}</div>
                    <div className="text-xs text-blue-500 space-x-2">
                        <Link href="/rating">{product.rating * 20}% rating</Link> {/* Assuming rating is out of 5 */}
                        <span>•</span>
                        <Link href={`/contact-seller/${product.ownerId}`}>Contact Seller</Link>
                        <span>•</span>
                        <Link href={`/shop/${product.ownerId}/products`}>Others items</Link>
                    </div>
                </div>
            </div>

            <hr className="mb-4" />

            <div className="text-2xl font-bold text-black mb-2">US ${product.price.toFixed(2)}</div>
            <p className="text-sm mb-4">
                {product.description}
            </p>

            <div className="text-sm mb-4">
                {/* You might want to add a dedicated 'condition' property to your Product interface */}
                <p><strong>Condition:</strong> New {/* Or determine condition based on other factors */}</p>
                <p><strong>Quantity:</strong> {product.remaining}</p>
            </div>

            <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-full text-white p-2 rounded-full border-solid border-4 border-black">
                BUY
            </button>
            <button className="my-1 bg-gray-300 hover:bg-white mx-auto w-full text-black p-2 rounded-full border-solid border-4 border-black">
                Add to cart
            </button>
        </div>
    );
};

export default ProductSideBar;