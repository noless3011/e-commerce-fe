'use client';
// components/order-cart.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProductApi } from '@/app/utils/ApiClient';
import Product, { mapProductResponseToProduct, ProductStatus } from '@/app/types/Product';
import Order from '@/app/types/Order';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useRouter } from 'next/navigation';
import { increaseOrderAmount, removeOrder } from '@/app/redux/cartSlice';

export interface CartItem {
    id: number; // Use product ID as cart item ID
    name: string;
    imageUrl: string;
    price: number;
    originalPrice?: number;
    quantity: number;
    stockStatus: ProductStatus;
}

async function convertOrderToOrderItem(order: Order): Promise<CartItem | null> {
    try {
        const getProductFunc = await ProductApi.productControllerFindByProductId(order.productId);
        const res = await getProductFunc();
        const product: Product = mapProductResponseToProduct(res.data);

        if (!product) {
            console.error(`Product with ID ${order.productId} not found.`);
            return null;
        }

        const orderItem: CartItem = {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0] || '', // Take the first image or an empty string
            price: product.price,
            originalPrice: product.discount > 0 ? product.price / (1 - product.discount) : undefined, // Calculate original price if there's a discount
            quantity: order.amount,
            stockStatus: product.status,
        };

        return orderItem;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
}

interface OrderCartProps {
    isCartOpen: boolean;
}

const OrderCart: React.FC<OrderCartProps> = ({ isCartOpen }) => {
    const [cartItems, setCartItems] = useState<Array<CartItem>>([]);
    const cartRedux = useSelector((state: RootState) => state.cart.orders);
    const router = useRouter();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCart = async () => {
            const promises = cartRedux.map(async (order) => {
                return await convertOrderToOrderItem(order);
            });

            const results = await Promise.all(promises);
            const validCartItems = results.filter(item => item !== null) as CartItem[];
            setCartItems(validCartItems);
        };

        if (isCartOpen) {
            fetchCart();
        } else {
            setCartItems([]);
        }
    }, [isCartOpen, cartRedux]);

    const handleIncreaseQuantity = (productId: number) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCartItems);
        dispatch(increaseOrderAmount(productId));
    };

    const handleDecreaseQuantity = (productId: number) => {
        const updatedCartItems = cartItems.map(item =>
            item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedCartItems.filter(item => item.quantity > 0)); // Ensure no zero quantity items
        // Assuming you have a Redux action to decrease quantity, otherwise you can remove the item if it goes to zero
        // dispatch(decreaseOrderAmount(productId)); // You might need to create this action
    };

    const handleRemoveFromCart = (productId: number) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
        dispatch(removeOrder(productId));
    };

    return (
        <div
            className={`absolute top-16 right-82 mt-2 w-fit bg-white rounded-md shadow-xl overflow-hidden z-40 transition-all duration-300 transform ${isCartOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}
            style={{ transformOrigin: 'top right' }}
        >

            <div className="bg-white rounded-lg w-fit shadow p-4 md:p-6 ">
                <h2 className="text-lg font-semibold mb-4">Cart</h2>
                <ul className="space-y-4 w-96">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex items-start space-x-4">
                            <div className="w-20 h-20 relative flex-shrink-0">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-md"
                                    crossOrigin='anonymous'
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-sm font-medium">{item.name}</h3>
                                        <div className="text-sm text-gray-500">
                                            {item.originalPrice && item.price !== item.originalPrice && (
                                                <span className="line-through mr-1">${item.originalPrice?.toFixed(2)}</span>
                                            )}
                                            ${item.price.toFixed(2)}
                                        </div>
                                        <div className={`text-xs ${item.stockStatus === 'Available' ? 'text-green-500' : item.stockStatus.startsWith('Available') ? 'text-orange-500' : 'text-red-500'}`}>
                                            {item.stockStatus}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex border border-gray-300 rounded">
                                            <button
                                                className="px-2 py-1 hover:bg-gray-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={item.quantity <= 1}
                                                onClick={() => handleDecreaseQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <span className="px-2 py-1 text-sm">{item.quantity}</span>
                                            <button
                                                className="px-2 py-1 hover:bg-gray-100 focus:outline-none"
                                                onClick={() => handleIncreaseQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none">
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 000-6.364z" />
                                            </svg>
                                            <span className="sr-only">Save</span>
                                        </button>
                                        <button
                                            type="button"
                                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                                            onClick={() => handleRemoveFromCart(item.id)}
                                        >
                                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            <span className="sr-only">Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="mt-6 pt-4 border-t">
                    <button
                        onClick={() => router.push('/payment')}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Go to Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderCart;