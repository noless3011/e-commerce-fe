import { RootState } from '@/app/redux/store';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct import for app router

const Sidebar: React.FC = () => {
    const [username, setUserName] = useState<string>("N/A");
    const [avatar, setAvatar] = useState<string>("N/A");
    const authInfo = useSelector((state: RootState) => state.auth);
    const pathname = usePathname(); // Initialize usePathname

    useEffect(() => {
        setUserName(authInfo.user?.username || "N/A");
        setAvatar("N/A"); //authInfo.user?.avatar ||
    }, [authInfo]);

    return (
        <div className="w-64 pr-8">
            <div className="bg-white rounded-md shadow-sm p-4 mb-6">
                <div className="flex justify-center mb-4">
                    <div className="relative rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center">
                        {avatar != "N/A" ? (
                            <Image src={avatar} alt="User Avatar" layout='fill' objectFit='cover' crossOrigin='anonymous' />
                        ) : (
                            <AiOutlineUser size={32} className="text-gray-500" />
                        )}
                    </div>
                </div>
                <div className="text-center">
                    <h2 className="font-semibold text-gray-800">{username}</h2>
                    <p className="text-gray-600 text-sm">ikakodesign@gmail.com</p>
                </div>
            </div>
            <div className="space-y-2">
                <Link href="/accountinfo/personal-info" className={`block font-semibold ${pathname === '/accountinfo/personal-info' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                    Personal information
                </Link>
                <Link href="/accountinfo/billing" className={`block font-semibold ${pathname === '/accountinfo/billing' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                    Billing & Payments
                </Link>
                <Link href="/accountinfo/order-history" className={`block font-semibold ${pathname === '/accountinfo/order-history' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                    Order History
                </Link>
                <Link href="/accountinfo/gift-cards" className={`block font-semibold ${pathname === '/accountinfo/gift-cards' ? 'text-orange-500' : 'text-gray-700 hover:text-gray-900'}`}>
                    Gift Cards
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;