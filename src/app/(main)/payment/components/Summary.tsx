import { FC } from 'react';
interface SummaryProps {
    totalPrice: number;
    totalShipping: number;
    onCheckout: () => void;
}
export const Summary: FC<SummaryProps> = ({
    totalPrice,
    totalShipping,
    onCheckout,
}) => (
    <div className="bg-yellow-100 p-6 rounded-lg h-fit">
        <div className="space-y-4">
            <div className="flex justify-between">
                <span>Items:</span>
                <span>USD ${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping:</span>
                <span>USD ${totalShipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>USD ${(totalPrice + totalShipping).toFixed(2)}</span>
            </div>
            <button
                onClick={onCheckout}
                className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition-colors"
            >
                Checkout Now
            </button>
        </div>
    </div>
);