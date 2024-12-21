"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';
import { div } from 'framer-motion/client';
import SearchBar from './components/header/SearchBar';
import { useRouter } from 'next/navigation';
import AuthenticationButtons from './components/header/AuthenticationButtons';
import AuthenticationArea from './components/header/AuthenticationArea';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Market' },
        { href: '/sell', label: 'Sell' },
        { href: '/accountinfo', label: 'Account' },
        { href: '/about', label: 'About' },
    ];

    const isActive = (path: string) => pathname === path;


    const router = useRouter();
    const login = () => {
        router.push("/account/login");
    }
    const register = () => {
        router.push("/account/register");
    }

    return (
        <Provider store={store}>
            <div className="flex flex-col gap-0 w-full">
                <nav className="bg-[#fcde70] shadow-md">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex flex-row justify-between items-center h-16">
                            <div className="flex-shrink-0">
                                <Link href="/" className="text-xl font-bold text-gray-800">
                                    Logo
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`font-medium text-2xl transition-colors hover:text-blue-500 ${isActive(link.href)
                                            ? 'text-blue-500'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                            <AuthenticationArea />
                        </div>
                    </div>
                </nav>
                <div className="w-full mt-1 py-2.5">
                    <SearchBar />
                </div>
            </div>
        </Provider>


    );
};

export default Header;