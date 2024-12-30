import React, { useEffect, useState } from 'react';
import Order, { OrderStatus } from '@/app/types/Order';
import Product, { mapProductResponseToProduct } from '@/app/types/Product';
import { ProductApi } from '@/app/utils/ApiClient';

interface OrderRowProps {
    order: Order;
    onNextStage: (order: Order) => void; // Receive the whole order
    isLoadingUpdate: boolean; // Add isLoadingUpdate prop
}

const getStatusDisplayName = (status: OrderStatus): string => {
    return status.charAt(0).toUpperCase() + status.slice(1);
};

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

const OrderRow: React.FC<OrderRowProps> = ({ order, onNextStage, isLoadingUpdate }) => {
    const nextStatus = getNextStatus(order.status);
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState<Product>();
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const fetchProductFunc = await ProductApi.productControllerFindByProductId(order.productId);
                const res = await fetchProductFunc();
                setProduct(mapProductResponseToProduct(res.data));
                setPrice((product ? product.price : 0) * (order.amount));
            } catch (error) {
                console.log(error);
            }
        }
        fetchProduct();
    }, [order])
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'active'
                        ? 'bg-blue-100 text-blue-800'
                        : order.status === 'preparing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : order.status === 'purchased'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-red-100 text-red-800'
                        }`}
                >
                    {getStatusDisplayName(order.status)}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{order.ownerId}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product?.name}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${price}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                    {new Date(order.createdTime).toLocaleDateString()}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                {nextStatus && (
                    <button
                        onClick={() => onNextStage(order)} // Pass the whole order
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isLoadingUpdate}
                    >
                        {isLoadingUpdate ? `Updating...` : `Move to ${getStatusDisplayName(nextStatus)}`}
                    </button>
                )}
            </td>
        </tr>
    );
};

export default OrderRow;