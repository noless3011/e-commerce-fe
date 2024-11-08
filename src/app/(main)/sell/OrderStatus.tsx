"use client";
import React from 'react';

const OrderStatus: React.FC = () => {
    const orders = [
        { id: 1, productName: 'Sản phẩm A', status: 'Đang xử lý', quantityOrdered: 2, image: '/path/to/imageA.jpg' },
        { id: 2, productName: 'Sản phẩm B', status: 'Đã giao hàng', quantityOrdered: 1, image: '/path/to/imageB.jpg' },
    ];

    return (
        <div className="bg-white p-4 rounded-md shadow-md w-full max-w-lg">
            <h2 className="text-xl text-black font-semibold mb-4">Trạng thái đơn hàng</h2>
            <ul>
                {orders.map((order) => (
                    <li key={order.id} className="text-black border-b p-2 last:border-none flex items-center space-x-4">
                        <img src={order.image} alt={order.productName} className="w-16 h-16 object-cover rounded-md" />
                        <div>
                            <p><strong>Sản phẩm:</strong> {order.productName}</p>
                            <p><strong>Trạng thái:</strong> {order.status}</p>
                            <p><strong>Số lượng đặt:</strong> {order.quantityOrdered}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderStatus;
