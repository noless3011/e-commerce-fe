"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { div } from 'framer-motion/client';
import SearchBar from './SearchBar';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'Market' },
        { href: '/sell', label: 'Sell' },
        { href: '/account', label: 'Account' },
        { href: '/about', label: 'About' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <div className="flex flex-col gap-10 w-full">
            <nav className="bg-[#fcde70] shadow-md">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-xl font-bold text-gray-800">
                                Logo
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
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
                    </div>
                </div>
            </nav>
            <SearchBar></SearchBar>
        </div>

    );
};

export default Header;