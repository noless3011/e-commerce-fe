"use client";
import React, { useState } from 'react';
import AddProductForm from './ProductForm';
import ProductList from './ProductList';
import OrderStatus from './OrderStatus';

const SellerDashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeView, setActiveView] = useState('addProduct');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const handleViewChange = (view: string) => {
        setActiveView(view);
        setIsMenuOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-100 relative">
            <div className="absolute top-4 left-4">
                <button
                    onClick={toggleMenu}
                    className="p-3 rounded-full bg-green text-white font-semibold hover:bg-green-600 shadow-md"
                >
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-4 w-64 bg-white shadow-lg rounded-xl p-4 z-30">
                    <button
                        onClick={() => handleViewChange('addProduct')}
                        className="block w-full text-left text-black font-semibold p-3 mb-2 rounded-md hover:bg-yellow-300 transition-all"
                    >
                        Add Product
                    </button>
                    <button
                        onClick={() => handleViewChange('viewProducts')}
                        className="block w-full text-left text-black font-semibold p-3 mb-2 rounded-md hover:bg-yellow-300 transition-all"
                    >
                        All Product
                    </button>
                    <button
                        onClick={() => handleViewChange('orderStatus')}
                        className="block w-full text-left text-black font-semibold p-3 rounded-md hover:bg-yellow-300 transition-all"
                    >
                        Product Management
                    </button>
                </div>
            )}

            <div className="flex-1 flex items-center justify-center">
                {activeView === 'addProduct' && <AddProductForm />}
                {activeView === 'viewProducts' && <ProductList />}
                {activeView === 'orderStatus' && <OrderStatus />}
            </div>
        </div>
    );
};

export default SellerDashboard;
