import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
    id: string;
    name: string;
    image: string;
    imageW: number;
    imageH: number;
    price: number;
    discount?: number;
    url: string;
}
/**The image width and height must be divisible by 4 */
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    image,
    imageW,
    imageH,
    price,
    discount,
    url,
}) => {

    return (
        <div className="h-fit w-fit rounded-lg shadow-lg hover:shadow-black transition-shadow duration-300">
            <Link href={url}>
                <div className={`relative h-fit w-fit rounded-t-lg`}
                    style={{
                        width: imageW,
                        height: imageH
                    }}>
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-contain rounded-t-lg "
                    />
                </div>
            </Link>

            <div className="p-4">
                <div className="relative w-full h-24 group">
                    <h3 className="text-lg font-medium line-clamp-3 select-text">
                        {name}
                    </h3>
                </div>

                <Link href={url}>
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
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;