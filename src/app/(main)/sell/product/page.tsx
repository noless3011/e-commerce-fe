// app/page.tsx
'use client';
import React, { useState } from 'react';
import ProductTable from './ProductTable';
import { addProduct } from './dummy';
import Product from '@/app/types/Product';
import { useSelector } from 'react-redux';

export default function StoreManagementPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const viewProduct = useSelector((state) => (state))
    return (
        <div className="p-4 w-full">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Store Management</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={addProduct}>
                    + New Product
                </button>
            </div>
            <div className="flex items-center mb-4 space-x-2">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search anything"
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {/* Add search icon here if needed */}
                </div>
                <button className="px-4 py-2 border rounded">Filters</button>
                <button className="px-4 py-2 border rounded">Sort</button>
            </div>
            <ProductTable products={products} />
        </div>
    );
}