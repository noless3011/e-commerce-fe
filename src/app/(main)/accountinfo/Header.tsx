import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';



const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800">Nespola Account</h1>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Sign out
            </button>
        </div>
    );
};
export default Header;