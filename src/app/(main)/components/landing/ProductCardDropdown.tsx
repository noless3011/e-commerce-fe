'use client';
import React, { useState } from "react";
import { BiDotsVerticalRounded, BiCart, BiHeart } from "react-icons/bi";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addOrder } from '@/app/redux/cartSlice';
import Order from '@/app/types/Order';
import store, { RootState } from "@/app/redux/store";

interface ProductCardDropdownProps {
    productId: number;
}
const ProductCardDropdown: React.FC<ProductCardDropdownProps> = ({ productId }) => {
    const [isHovered, setIsHovered] = useState(false);

    const currentUser = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (currentUser) {
            const newOrder: Order = {
                status: "inCart",
                ownerId: currentUser.id, // Replace with actual owner ID
                productId: productId, // Replace with actual product ID
                address: currentUser.address, // Replace with actual address
                amount: 1, // Replace with actual amount
                createdTime: Date.now(),
                purchasedTime: 0,
            };
            dispatch(addOrder(newOrder));
        }
    };


    return (
        <Provider store={store}>
            <div
                className="absolute right-2 top-2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {isHovered ? (
                    <div className="absolute right-0  bg-transparent shadow-lg flex flex-col">
                        <button className="p-2 w-10 aspect-square rounded-full bg-gray-200 mb-2 hover:bg-gray-100 flex items-center justify-center" onClick={handleAddToCart}>
                            <BiCart className="w-6 h-6 text-gray-700" />
                        </button>
                        <button className="p-2 w-10 aspect-square rounded-full bg-gray-200 hover:bg-gray-100 flex items-center justify-center" onClick={() => { }}> {/*TODO: Add like functionality */}
                            <BiHeart className="w-6 h-6 text-gray-700" />
                        </button>
                    </div>
                ) :
                    (<button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                        <BiDotsVerticalRounded className="w-6 h-6" />
                    </button>)}
            </div>
        </Provider>
    );
};

export default ProductCardDropdown;