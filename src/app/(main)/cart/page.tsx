'use client'
import { FC, useState } from 'react';
import { OrderCard } from './components/OrderCard';
import Order from '@/app/types/Order';
import { Summary } from './components/Summary';
import Product from '@/app/types/Product';
import OrderStatus from '../sell/OrderStatus';

const Page: FC = () => {
    // Đây là một array state chứa các element là các state và hàm set của nó :))
    // Mỗi state sẽ là data của một order 
    const [orders, setOrders] = useState<
        [Order | null, React.Dispatch<React.SetStateAction<Order | null>>][]
    >([
        useState<Order | null>({
            status: "pending",
            ownerId: 1,
            productId: 101,
            address: "123 Main St, Hanoi, Vietnam",
            amount: 2,
            createdTime: 1672531199000,
            purchasedTime: 1672617599000,
        }),
        useState<Order | null>({
            status: "active",
            ownerId: 2,
            productId: 102,
            address: "456 Elm St, Da Nang, Vietnam",
            amount: 1,
            createdTime: 1672621199000,
            purchasedTime: 1672707599000,
        }),
        useState<Order | null>({
            status: "completed",
            ownerId: 3,
            productId: 103,
            address: "789 Oak St, Ho Chi Minh City, Vietnam",
            amount: 3,
            createdTime: 1672711199000,
            purchasedTime: 1672797599000,
        }),
        useState<Order | null>({
            status: "canceled",
            ownerId: 4,
            productId: 104,
            address: "101 Pine St, Hue, Vietnam",
            amount: 4,
            createdTime: 1672801199000,
            purchasedTime: 1672887599000,
        }),
    ]);

    const printArray = (array: any[]) => {
        array.forEach((item, index) => {
            console.log(`Index ${index}:`, item);
        });
    };
    const remove = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
    }
    return (
        <div className="flex flex-col items-center">
            <div className="w-2/3 flex flex-col">
                <h1 className="font-bold text-2xl">Shopping Cart</h1>
                <br />
                <div className="w-full flex flex-col xl:flex-row">
                    <div className="flex-1 xl:w-auto h-fit">
                        {orders.map((order, index) => (
                            <OrderCard index={index} orderList={orders} order={order[0]} onSetOrder={order[1]} onRemove={remove} />
                        ))}
                    </div>
                    <div className="w-full h-60 xl:w-80">
                        <div className="w-auto mx-8 my-6 bg-yellow h-60">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;