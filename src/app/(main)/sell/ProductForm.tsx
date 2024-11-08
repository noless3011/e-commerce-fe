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
        <div className="bg-white p-4 rounded-md text-black shadow-md w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">Thêm sản phẩm mới</h2>
            <input
                type="text"
                placeholder="Tên sản phẩm"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
            />
            <textarea
                placeholder="Thông tin sản phẩm"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
            />
            <input
                type="number"
                placeholder="Giá"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded-md mb-2"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-2 border rounded-md mb-2"
            />
            <input
                type="number"
                placeholder="Số lượng"
                value={productQuantity}
                onChange={(e) => setProductQuantity(Number(e.target.value))}
                min="1"
                className="w-full p-2 border rounded-md mb-2"
            />
            <button onClick={handleAddProduct} className="w-full p-2 bg-blue-500 text-white rounded-md">
                Thêm sản phẩm
            </button>
        </div>
    );
};

export default AddProductForm;
