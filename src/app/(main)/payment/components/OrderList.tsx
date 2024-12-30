'use client';
import Order from "@/app/types/Order";
import { OrderCard } from "./OrderCard";
import { Dispatch, SetStateAction } from "react";
interface OrderListProps {
    orders: Order[];
    setOrders: Dispatch<SetStateAction<Array<Order>>>
}
const OrderList: React.FC<OrderListProps> = ({ orders, setOrders }) => {


    const remove = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
    }
    const setOrderFunc = (index: number, newOrder: Order) => {
        setOrders(prevOrders =>
            prevOrders.map((order, i) => (i === index ? newOrder : order))
        );
    };
    return (<div className="flex-1 xl:w-auto h-fit">
        {orders.map((order, index) => (
            <OrderCard key={index} index={index} order={order} onSetOrder={setOrderFunc} onRemove={remove} />
        ))}
    </div>)
}
export default OrderList;