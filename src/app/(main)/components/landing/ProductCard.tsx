import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    cardW: number;
    cardH: number;
    price: number;
    discount?: number;
    url: string;
}
/**The image width and height must be divisible by 4 */
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    image,
    cardW: cardW,
    cardH: cardH,
    price,
    discount,
    url,
}) => {

    return (
        <div className="flex flex-col rounded-lg shadow-lg hover:shadow-black transition-shadow duration-300" style={
            {
                height: cardH,
                width: cardW
            }
        }>
            <Link href={url} className="block overflow-hidden aspect-square flex-grow-[3]">
                <div className="relative aspect-auto rounded-t-lg w-full h-full object-cover">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-t-lg "
                    />
                </div>
            </Link>
            <Link href={url} className="flex-grow-[1]">
                <div className="p-4">
                    <div className="relative w-full h-24 group">
                        <h3 className="text-lg font-medium line-clamp-3 select-text">
                            {name}
                        </h3>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-bold">
                            {discount ? (
                                <>
                                    <span className="text-red-500">{discount.toFixed(2)}%</span>{' '}
                                    <span className="text-gray-900 line-through">
                                        {price.toFixed(2)} VND
                                    </span>
                                    <span className="ml-2 text-gray-900">
                                        {(price * (discount / 100)).toFixed(2)} VND
                                    </span>
                                </>
                            ) : (
                                <>{price.toFixed(2)} VND</>
                            )}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;