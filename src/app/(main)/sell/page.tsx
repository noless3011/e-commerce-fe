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
                <button onClick={toggleMenu} className="p-2 rounded-md bg-blue-600 text-white">
                    ☰
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-16 left-4 w-48 bg-white shadow-lg rounded-md p-4 z-30">
                    <button onClick={() => handleViewChange('addProduct')} className="block w-full text-left text-gray-800 mb-2">
                        Thêm sản phẩm
                    </button>
                    <button onClick={() => handleViewChange('viewProducts')} className="block w-full text-left text-gray-800 mb-2">
                        Xem sản phẩm
                    </button>
                    <button onClick={() => handleViewChange('orderStatus')} className="block w-full text-left text-gray-800">
                        Trạng thái đơn hàng
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
