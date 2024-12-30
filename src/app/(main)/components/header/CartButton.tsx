import React, { useState, useEffect, useRef } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import OrderCart from './OrderCart';

export default function CartButton() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const cartRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsCartOpen(false);
            }
        }

        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen]);

    return (
        <div className="">
            <button
                onClick={toggleCart}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow-lg z-50"
            >
                <BiShoppingBag size={24} />
            </button>

            <div ref={cartRef}>
                {isCartOpen && <OrderCart isCartOpen={isCartOpen} />}
            </div>
        </div>
    );
}