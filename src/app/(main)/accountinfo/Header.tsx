"use client"
import React from 'react';
import { AuthApi } from '@/app/utils/ApiClient';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import store, { RootState } from '@/app/redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { checkLogin, logOut, logOutWithApi } from '@/app/redux/authSlice';




const Header: React.FC = () => {
    const [logoutStatus, setLogoutStatus] = useState("");
    const router = useRouter();
    const authDispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const authInfo = useSelector((state: RootState) => state.auth)
    // const logout = async (e: React.FormEvent) => {
    //         e.preventDefault();
    //         try {
    //             const callLogoutApiFunc = await AuthApi.authControllerLogout();
    //             const res = await callLogoutApiFunc();
    //             if (res.data.isSuccess === true) {
    //                 authDispatch(logOut())
    //                 //router.push('/account/login');
    //             }
    //         } catch (error) {
    //             setLogoutStatus("*Failed to login to your account");
    //         }
    
    
    //     };
    const logout = () =>{
        authDispatch(logOutWithApi());
    } 
    return (
        <Provider store={store}>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-xl font-semibold text-gray-800">Nespola Account</h1>
            <button onClick={logout} formMethod='post' className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Sign out
            </button>
        </div>
        </Provider>
    );
};
export default Header;