"use client";
import React from 'react';

const ProductList: React.FC = () => {
    const products = [
        { id: 1, name: 'Product A', description: 'Mô tả sản phẩm A', price: 100000, image: '/path/to/imageA.jpg', quantity: 10 },
        { id: 2, name: 'Product B', description: 'Mô tả sản phẩm B', price: 200000, image: '/path/to/imageB.jpg', quantity: 5 },
    ];

    return (
        <div className="bg-white p-6 rounded-xl shadow-md w-full h-screen ml-[8cm]">
            <h2 className="text-xl text-black font-semibold mb-4">All Product</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-xl text-black shadow-md min-h-[450px] flex flex-col">
                        <div className="flex justify-center">
                            <img src={product.image} alt={product.name} className="w-16 h-16 object-cover min-h-[250px] rounded-xl" />
                        </div>

                        <div className="flex flex-col justify-between mt-auto text-left">
                            <p><strong>{product.name}</strong></p>
                            <p>$ {product.price.toLocaleString()}</p>
                            <p>Amount: {product.quantity}</p>
                        </div>

                        <div className="mt-auto flex justify-center space-x-4 w-full">
                            <button className="bg-gray-300 text-black py-1 px-4 rounded-full hover:bg-gray-400 transition duration-200">Edit</button>
                            <button className="bg-gray-300 text-black py-1 px-4 rounded-full hover:bg-gray-400 transition duration-200">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
