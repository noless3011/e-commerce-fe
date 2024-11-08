"use client";
import React, { useState } from 'react';

const SellerDashboard: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeView, setActiveView] = useState('addProduct');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleViewChange = (view: string) => {
        setActiveView(view);
        setIsMenuOpen(false);
    };

    return (
        <div className="flex h-screen bg-gray-100">\
            <div className="absolute top-4 left-4">
                <button onClick={toggleMenu} className="p-2 rounded-md text-gray">
                    ☰
                </button>
            </div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-48 bg-white shadow-lg transform ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 space-y-4">
                    <button onClick={() => handleViewChange('addProduct')} className="block text-gray-800">
                        Thêm sản phẩm
                    </button>
                    <button onClick={() => handleViewChange('viewProducts')} className="block text-gray-800">
                        Xem sản phẩm
                    </button>
                    <button onClick={() => handleViewChange('orderStatus')} className="block text-gray-800">
                        Trạng thái đơn hàng
                    </button>
                </div>
            </div>

            <div className="flex-1 p-8">
                {activeView === 'addProduct' && <div>Form thêm sản phẩm sẽ hiển thị ở đây.</div>}
                {activeView === 'viewProducts' && <div>Danh sách các sản phẩm sẽ hiển thị ở đây.</div>}
                {activeView === 'orderStatus' && <div>Trạng thái đơn hàng sẽ hiển thị ở đây.</div>}
            </div>
        </div>
    );
};

export default SellerDashboard;

