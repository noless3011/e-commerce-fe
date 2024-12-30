'use client';
import { RootState } from "@/app/redux/store";
import Order from "@/app/types/Order";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import OrderList from "./OrderList";
import { OrderApi, ProductApi } from "@/app/utils/ApiClient";
import Product, { mapProductResponseToProduct } from "@/app/types/Product";
import { CreateOrderDto } from "@/api";
import { useRouter } from "next/navigation";

const PaymentContainer = () => {
    const [orders, setOrders] = useState<Array<Order>>([]);
    const [productPrices, setProductPrices] = useState<{ [productId: number]: number }>({});
    const orderRedux = useSelector((state: RootState) => state.cart.orders);
    const router = useRouter();
    useEffect(() => {
        console.log("orders from Redux: ", orderRedux);
        setOrders(orderRedux);
    }, [orderRedux]);

    useEffect(() => {
        const fetchProductPrices = async () => {
            const prices: { [productId: number]: number } = {};
            for (const order of orders) {
                try {
                    const getProductFunc = await ProductApi.productControllerFindByProductId(order.productId);
                    const res = await getProductFunc();
                    const product: Product = mapProductResponseToProduct(res.data);
                    prices[order.productId] = product.price;
                } catch (error) {
                    console.error("Error fetching product price:", error);
                }
            }
            setProductPrices(prices);
        };

        if (orders.length > 0) {
            fetchProductPrices();
        }
    }, [orders]);

    const totalPrice = useMemo(() => {
        return orders.reduce((sum, order) => {
            const price = productPrices[order.productId] || 0;
            return sum + (price * order.amount || 0);
        }, 0);
    }, [orders, productPrices]);
    const paymentHandler = async () => {
        orders.map(async (order) => {
            try {
                const temp = {
                    status: 'active',
                    productId: order.productId,
                    address: order.address,
                    amount: order.amount,
                };
                const createOrderFunc = await OrderApi.orderControllerCreateNewOrder(temp as CreateOrderDto)
                const res = await createOrderFunc();
                console.log(res);
                router.push("/");

            } catch (error) {
                router.push("/accountinfo/personal-info");
                alert("please fill user info");
                console.log(error);
            }
        })

    }
    return (<div className="w-full flex flex-col xl:flex-row">
        <OrderList orders={orders} setOrders={setOrders}></OrderList>
        <div className="w-full h-fit xl:w-80 p-4">
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
                <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                    <span className="font-medium">Shipping:</span>
                    <span>$10.00</span> {/* You can make this dynamic if needed */}
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-bold">Total:</span>
                    <span className="text-lg font-bold">${(totalPrice + 10).toFixed(2)}</span>
                </div>
                <button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={paymentHandler}
                >
                    Proceed to Pay
                </button>
            </div>
        </div>
    </div>)
}
export default PaymentContainer;