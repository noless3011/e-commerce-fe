'use client';

import React, { useState } from 'react';

interface Product {
    name: string;
    description: string;
    price: number;
    image: File | null;
}

const ProductForm: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        name: '',
        description: '',
        price: 0,
        image: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setProduct((prev) => ({ ...prev, image: files[0] }));
        } else {
            setProduct((prev) => ({ ...prev, image: null })); 
        }
    };
    
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(product);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 max-w-md mx-auto text-black bg-white shadow-md rounded">
            <label className="flex flex-col">
                Tên sản phẩm:
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded p-2 mt-1"
                    required
                />
            </label>
            
            <label className="flex flex-col">
                Thông tin sản phẩm:
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded p-2 mt-1"
                    required
                />
            </label>
            
            <label className="flex flex-col">
                Giá (VNĐ):
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded p-2 mt-1"
                    required
                />
            </label>
            
            <label className="flex flex-col">
                Hình ảnh:
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="mt-1"
                    required
                />
            </label>
            
            <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
                Đăng sản phẩm
            </button>
        </form>
    );
};

export default ProductForm;
