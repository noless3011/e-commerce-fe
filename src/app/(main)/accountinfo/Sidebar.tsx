import { RootState } from '@/app/redux/store';
import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Correct import for app router
import { FileUploadApi } from '@/app/utils/ApiClient';
import { updateUser } from '@/app/redux/authSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { UpdateUserDto } from '@/api';

const Sidebar: React.FC = () => {
    const [username, setUserName] = useState<string>("N/A");
    const [avatar, setAvatar] = useState<string>("N/A");
    const authInfo = useSelector((state: RootState) => state.auth);
    const pathname = usePathname(); // Initialize usePathname
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    useEffect(() => {
        setUserName(authInfo.user?.username || "N/A");
        setAvatar(authInfo.user?.avatar || "N/A");
    }, [authInfo, avatar]);

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            try {
                const fileUploadFunc = await FileUploadApi.fileUploadControllerUploadSingle(file);
                const fileRes = await fileUploadFunc();
                const avatarlink = 'https://lucas-digital-market-dev.nysm.work/api/file-upload/' + fileRes.data.fileName;
                const updatedUser: UpdateUserDto = {
                    avatar: avatarlink,
                    birthDay: authInfo.user?.birthDay,
                    gender: authInfo.user?.gender,
                    name: authInfo.user?.name,
                    address: authInfo.user?.address,
                };

                dispatch(updateUser(updatedUser));
                setAvatar(avatarlink);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className="w-64 pr-8">
            <div className="bg-white rounded-md shadow-sm p-4 mb-6">
                <div className="flex justify-center mb-4">
                    <div className="relative rounded-full bg-gray-200 w-16 h-16 flex items-center justify-center overflow-hidden">
                        {avatar != "N/A" ? (
                            <Image src={avatar} alt="User Avatar" layout='fill' objectFit='cover' crossOrigin='anonymous' />
                        ) : (
                            <>
                                <AiOutlineUser size={32} className="text-gray-500" />
                                <button
                                    type="button"
                                    className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-200 flex items-center justify-center"
                                    onClick={handleUploadClick}
                                >
                                    <span className="text-white text-sm">Upload</span>
                                </button>
                            </>
                        )}
                    </div>
                    {avatar === "N/A" && (
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={handleFileChange}
                            accept="image/*"
                        />
                    )}
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