"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '@/app/redux/store';
import ProductCardDropdown from './ProductCardDropdown';
import Product, { mapProductResponseToProduct } from '@/app/types/Product';
import { ProductApi } from '@/app/utils/ApiClient';

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
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const getProductFunc = await ProductApi.productControllerFindByProductId(Number(id));
                const response = await getProductFunc();
                const productData = mapProductResponseToProduct(response.data);
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <Provider store={store}>
            <div className="flex flex-col relative rounded-lg shadow-lg hover:shadow-black transition-shadow duration-300"
                style={{
                    height: cardH,
                    width: cardW
                }}>
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

                <ProductCardDropdown></ProductCardDropdown>
            </div>
        </Provider>
    );
};


export default ProductCard;