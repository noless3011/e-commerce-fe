import Product from "@/app/types/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";


interface ItemsResultProps {
    results: Product[];
}

const ItemsResult: React.FC<ItemsResultProps> = ({ results }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((product) => (

                <Link href={"product/" + product.id}>
                    <div key={product.id} className="relative w-full bg-white p-4 rounded-lg shadow-lg">
                        {/* Container cố định kích thước cho ảnh */}
                        <div className="relative w-full h-40 mb-4 overflow-hidden">
                            {product.images.length > 0 ? (
                                <Image
                                    src={product.images[0]} // Hiển thị ảnh đầu tiên
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                    crossOrigin="anonymous"
                                />
                            ) : (
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                    No Image
                                </div>
                            )}
                        </div>

                        {/* Thông tin sản phẩm */}
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 mb-2">{product.description}</p>
                        <p className="text-lg font-bold text-gray-600">${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default ItemsResult;
