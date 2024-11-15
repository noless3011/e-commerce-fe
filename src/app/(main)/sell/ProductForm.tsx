"use client";
import React, { useState } from 'react';

const AddProductForm: React.FC = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [price, setPrice] = useState('');
    const [productImage, setProductImage] = useState<File | null>(null);
    const [productQuantity, setProductQuantity] = useState<number>(1);

    const handleAddProduct = () => {
        console.log('Thêm sản phẩm:', { productName, productDescription, price });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProductImage(e.target.files[0]);
        }
    };

    return (
        <div className="bg-yellow-300 p-4 rounded-xl text-black shadow-md w-full max-w-lg border border-black">
            <h2 className="text-lg font-semibold mb-4 text-black">Add Product</h2>
            <input
                type="text"
                placeholder="Product Name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border border-black rounded-lg mb-3 bg-white"
            />
            <textarea
                placeholder="Product Description"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full p-2 border border-black rounded-lg mb-3 bg-white"
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border border-black rounded-lg mb-3 bg-white"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border border-black rounded-lg mb-3 bg-white"
            />
            <input
                type="number"
                placeholder="Amount"
                value={productQuantity}
                onChange={(e) => setProductQuantity(Number(e.target.value))}
                min="1"
                className="w-full p-2 border border-black rounded-lg mb-3 bg-white"
            />
            <button
                onClick={handleAddProduct}
                className="w-full p-2 bg-green text-white font-semibold rounded-xl hover:bg-green-600"
            >
                Add Product
            </button>
        </div>
    );
};

export default AddProductForm;
