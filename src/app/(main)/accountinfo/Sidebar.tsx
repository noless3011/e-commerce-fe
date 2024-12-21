import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 pr-8">
            <div className="bg-white rounded-md shadow-sm p-4 mb-6">
                <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center">
                        <AiOutlineUser size={32} className="text-gray-500" />
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="font-semibold text-gray-800">Irakli talavadze</h2>
                    <p className="text-gray-600 text-sm">ikakodesign@gmail.com</p>
                </div>
            </div>
            <div className="space-y-2">
                <a href="#" className="block text-orange-500 font-semibold">
                    Personal information
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                    Billing & Payments
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                    Order History
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900">
                    Gift Cards
                </a>
            </div>
        </div>
    );
};

export default Sidebar;