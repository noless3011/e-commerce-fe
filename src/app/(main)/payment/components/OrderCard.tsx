import { useEffect, useState } from 'react';
import Order from '@/app/types/Order';
import { ProductApi } from '@/app/utils/ApiClient';
import Product, { mapProductResponseToProduct } from '@/app/types/Product';
import { useRouter } from 'next/navigation';
interface OrderCardProps {
    index: number;
    order: Order | null; // Single order for the current component
    onSetOrder: (index: number, newOrder: Order) => void;
    onRemove: (index: number) => void;
}
export const OrderCard: React.FC<OrderCardProps> = ({
    index,
    order,
    onSetOrder,
    onRemove
}) => {
    const [product, setProduct] = useState<Product | null>(null);
    const router = useRouter();
    const navigateToProduct = () => {
        router.push("/product/" + product?.id);
    }
    useEffect(() => {
        const loadProduct = async () => {
            try {
                if (order === null) return;
                const loadProductFunc = await ProductApi.productControllerFindByProductId(order.productId);
                const res = await loadProductFunc();
                setProduct(mapProductResponseToProduct(res.data));
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        loadProduct();
    }, [order?.productId])
    return (
        <div className="w-auto mx-8 my-6 h-64 flex flex-col border-solid border-2 border-black rounded-xl">
            <div className="flex-1 p-2 flex flex-row items-center">
                <div className="flex-1 flex flex-row gap-2">
                    <div className="w-10 my-auto aspect-square rounded-full bg-stone-500"></div>
                    <div className="flex-1 bg-white my-auto">
                        <p>Shop id: {product?.ownerId}</p>
                    </div>
                </div>
                <div className="flex-1 flex flex-row-reverse px-6">
                    <a href="#" className="underline font-semibold text-blue-600"></a>
                </div>
            </div>
            <div className="flex-3 flex flex-row gap-2 items-center p-2">
                <div className="h-32 aspect-square rounded-lg overflow-hidden">
                    <img src={product?.images[0]} alt="Product" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 h-32 overflow-y-scroll scrollbar-hidden">
                    <p className="w-auto">{product?.description}</p>
                </div>
                <div className="w-64 h-32 flex flex-col gap-2 px-4">
                    <div className="flex justify-end space-x-2">
                        <span className="text-black font-bold text-lg">USD</span>
                        <span className="text-gray-400 text-lg">${product?.price}</span>
                    </div>
                    <div className="flex justify-end mt-2 space-x-2">
                        <span className="text-black font-medium">Shipping Price:</span>
                        <div className="flex items-center space-x-1">
                            <span className="text-black font-medium">USD</span>
                            <span className="text-black font-medium">+</span>
                            <span className="text-gray-400">$10</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex flex-row p-2">
                <div className="grid grid-cols-[auto_1fr_auto] space-x-2 flex-1 mx-4 items-center gap-3">
                    <span className="text-gray-500 justify-self-start">{order ? order.amount : 0}</span>
                    <input
                        type="range"
                        min="0"
                        max={`${!product ? 0 : product.remaining}`}
                        value={order ? order.amount : 0}
                        onChange={(e) => {
                            if (!order) return;
                            console.log("Trying to change");
                            const newAmount = parseInt(e.target.value, 10);
                            const newOrder = { ...order, amount: newAmount };
                            onSetOrder(index, newOrder);
                        }}
                        className="w-full accent-black"
                    />
                    <span className="text-gray-500 justify-self-end">{`${!product ? 0 : product.remaining}`}</span>
                </div>
                {/* Action Buttons */}
                <div className="flex space-x-4">
                    <button
                        onClick={() => onRemove(index)}
                        className="text-black underline font-medium hover:text-gray-700"
                    >
                        Remove
                    </button>
                    <button
                        onClick={() => { navigateToProduct() }}
                        className="text-black underline font-medium hover:text-gray-700"
                    >
                        Product
                    </button>
                </div>
            </div>
        </div>
    );
}