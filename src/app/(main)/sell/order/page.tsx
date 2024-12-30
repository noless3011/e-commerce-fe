'use client';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import OrderTable from './OrderTable';
import { convertToOrders, OrderStatus, default as OrderType } from '@/app/types/Order'; // Import the interface
import { OrderApi } from '@/app/utils/ApiClient';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Pagination from '../../components/landing/Pagination'; // Import the Pagination component

const tabs: OrderStatus[] = ['active', 'preparing', 'purchased', 'canceled'];
const ITEMS_PER_PAGE = 10; // Define items per page

const getNextStatus = (status: OrderStatus): OrderStatus | undefined => {
    switch (status) {
        case 'active':
            return 'preparing';
        case 'preparing':
            return 'purchased';
        default:
            return undefined;
    }
};

const getStatusDisplayName = (status: OrderStatus): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
};

export default function OrderManagementPage() {
    const [activeTab, setActiveTab] = useState<OrderStatus>('active');
    const [orders, setOrders] = useState<OrderType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false); // To prevent multiple updates at once
    const currentUser = useSelector((state: RootState) => state.auth.user?.id);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const fetchOrderFunc = await OrderApi.orderControllerFindPagination(
                    currentPage,
                    ITEMS_PER_PAGE,
                    activeTab,
                    undefined,
                    currentUser
                );
                const res = await fetchOrderFunc();
                setOrders(convertToOrders(res.data.data));
                setTotalPages(Math.ceil(res.data.total / ITEMS_PER_PAGE));
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        };
        fetchOrders();
    }, [activeTab, currentPage, currentUser]);

    const filteredOrders = useMemo(() => {
        return orders; // Filtering is now done on the server side
    }, [orders]);

    const handleTabClick = (tab: OrderStatus) => {
        setActiveTab(tab);
        setCurrentPage(1); // Reset to the first page when the tab changes
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleNextStage = useCallback(async (orderToUpdate: OrderType) => {
        if (isLoadingUpdate) return; // Prevent multiple rapid updates

        const nextStatus = getNextStatus(orderToUpdate.status);
        if (!nextStatus) return;

        setIsLoadingUpdate(true);
        try {
            const updateOrderFunc = await OrderApi.orderControllerUpdateStatus(orderToUpdate.id, nextStatus);
            await updateOrderFunc();

            // Update the UI optimistically after the API call is successful
            setOrders((prevOrders) =>
                prevOrders.map((order) => {
                    if (order.id === orderToUpdate.id) {
                        return { ...order, status: nextStatus };
                    }
                    return order;
                })
            );
        } catch (error) {
            console.error("Error updating order status:", error);
            // Optionally revert the UI change or show an error message
        } finally {
            setIsLoadingUpdate(false);
        }
    }, [isLoadingUpdate]);

    return (
        <div className="p-4 w-full">
            <h1 className="text-2xl font-bold mb-4">Order Management</h1>
            <div className="border-b border-gray-200 mb-4">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab
                                ? 'border-indigo-500 text-indigo-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } focus:outline-none`}
                        >
                            {getStatusDisplayName(tab)}
                        </button>
                    ))}
                </nav>
            </div>
            <OrderTable orders={filteredOrders} onNextStage={handleNextStage} isLoadingUpdate={isLoadingUpdate} />
            <div className="mt-4 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}