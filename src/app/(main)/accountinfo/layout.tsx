"use client"
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';

const AccountSettings = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <Provider store={store}>
            <div className="bg-gray-50 min-h-screen font-sans">
                <div className="container mx-auto max-w-screen-lg py-10 px-6">
                    {/* Header */}
                    <Header></Header>

                    {/* Main Content */}
                    <div className="flex">
                        {/* Left Sidebar */}
                        <Sidebar></Sidebar>

                        {/* Right Content */}
                        {children}
                    </div>
                </div>
            </div>
        </Provider>
    );
};

export default AccountSettings;