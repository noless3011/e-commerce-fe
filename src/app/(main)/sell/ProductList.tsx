"use client";
import React from 'react';

const ProductList: React.FC = () => {
    const products = [
        { id: 1, name: 'Sản phẩm A', description: 'Mô tả sản phẩm A', price: 100000, image: '/path/to/imageA.jpg', quantity: 10 },
        { id: 2, name: 'Sản phẩm B', description: 'Mô tả sản phẩm B', price: 200000, image: '/path/to/imageB.jpg', quantity: 5 },
    ];

    return (
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-lg">
            <h2 className="text-xl text-black font-semibold mb-4">Danh sách sản phẩm</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} className="text-black border-b p-2 last:border-none flex items-center space-x-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                            <p><strong>{product.name}</strong> - {product.description}</p>
                            <p>Giá: {product.price.toLocaleString()} VND</p>
                            <p>Số lượng: {product.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
