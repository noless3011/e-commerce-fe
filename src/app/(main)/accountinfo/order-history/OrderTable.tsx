'use client';
import { RootState } from "@/app/redux/store";
import OrderRow from "./OrderRow";
import Order, { convertToOrders } from "@/app/types/Order";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OrderApi } from "@/app/utils/ApiClient";
const ITEMS_PER_PAGE = 1000; // Define items per page

const OrderTable = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [isLoadingUpdate] = useState(false); // To prevent multiple updates at once
    const currentUser = useSelector((state: RootState) => state.auth.user?.id);
    const auth = useSelector((state: RootState) => state.auth.isAuthenticated);
    const fetchOrders = useCallback(async () => {
        try {
            if (!auth) return;
            let temp: Order[] = [];
            const [fetchActiveOrderFunc, fetchPreparingOrderFunc] = await Promise.all([
                OrderApi.orderControllerFindPagination(
                    1,
                    ITEMS_PER_PAGE,
                    'active',
                    currentUser,
                    undefined
                ),
                OrderApi.orderControllerFindPagination(
                    1,
                    ITEMS_PER_PAGE,
                    'preparing',
                    currentUser,
                    undefined
                )
            ]);

            const [resActive, resPreparing] = await Promise.all([
                fetchActiveOrderFunc(),
                fetchPreparingOrderFunc(),
            ]);
            temp = temp.concat(convertToOrders(resActive.data.data));
            temp = temp.concat(convertToOrders(resPreparing.data.data));
            setOrders(temp);

        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    }, [currentUser]);

    useEffect(() => {
        fetchOrders();
    }, [fetchOrders]);

    const handleOrderCancelled = useCallback(() => {
        // After an order is cancelled, refetch the orders to update the table
        fetchOrders();
    }, [fetchOrders]);

    return (<div className="overflow-x-auto rounded-lg border h-[40rem] overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50 sticky top-0 z-10">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Owner ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Product ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created Time
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                    <OrderRow
                        key={order.id}
                        order={order}
                        isLoadingUpdate={isLoadingUpdate}
                        finishDeleteHandler={handleOrderCancelled} // Pass the handler
                    />
                ))}
            </tbody>
        </table>
    </div>)
}
export default OrderTable;