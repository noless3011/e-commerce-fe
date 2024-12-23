"use client"
import React from 'react';
import { AuthApi } from '@/app/utils/ApiClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';




const Header: React.FC = () => {
    const [logoutStatus, setLogoutStatus] = useState("");
    const router = useRouter();
    const logout = async (e: React.FormEvent) => {
            e.preventDefault();
            try {
                const callLogoutApiFunc = await AuthApi.authControllerLogout();
                const res = await callLogoutApiFunc();
                if (res.data.isSuccess === true) {
                    //router.push('/account/login');
                }
            } catch (error) {
                setLogoutStatus("*Failed to login to your account");
            }
    
    
        };
    return (
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800">Nespola Account</h1>
            <button onClick={logout} formMethod='post' className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Sign out
            </button>
        </div>
    );
};
export default Header;