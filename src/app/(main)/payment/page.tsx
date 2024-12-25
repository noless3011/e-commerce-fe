'use client'
import { FC, useState } from 'react';
import Order from '@/app/types/Order';
import { OrderCard } from './components/OrderCard';
import { Provider, useDispatch } from 'react-redux';
import store from '@/app/redux/store';
const Page: FC = () => {
    // Đây là một array state chứa các element là các state và hàm set của nó :))
    // Mỗi state sẽ là data của một order 
    const [orders, setOrders] = useState<Array<Order>>([]);
    const dispatch = useDispatch();

    const remove = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
    }
    const setOrderFunc = (index: number, newOrder: Order) => {
        const tempList = orders;
        tempList[index] = newOrder;
        setOrders(tempList);
    }
    return (
        <Provider store={store}>
            <div className="flex flex-col items-center">
                <div className="w-2/3 flex flex-col">
                    <h1 className="font-bold text-2xl">Payments</h1>
                    <br />
                    <div className="w-full flex flex-col xl:flex-row">
                        <div className="flex-1 xl:w-auto h-fit">
                            {orders.map((order, index) => (
                                <OrderCard index={index} order={order} onSetOrder={setOrderFunc} onRemove={remove} />
                            ))}
                        </div>
                        <div className="w-full h-60 xl:w-80">
                            <div className="w-auto mx-8 my-6 bg-yellow h-60">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>
    );
};
export default Page;