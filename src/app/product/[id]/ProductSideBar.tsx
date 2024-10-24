import React from 'react'
import { Product } from './page';
import Link from 'next/link';


type ProductProps = {
    product: Product;
}

const ProductSideBar: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="max-w-sm p-6 bg-gray-100 rounded-lg">
            <h1 className="text-lg font-bold mb-4">{product.name}</h1>

            <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
                <div>
                    <div className="text-sm font-semibold">{product.shop}</div>
                    <div className="text-xs text-blue-500 space-x-2">
                        <Link href="/rating">90% rating</Link>
                        <span>•</span>
                        <Link href="/contact-seller">Contact Seller</Link>
                        <span>•</span>
                        <Link href="/other-items">Others items</Link>
                    </div>
                </div>
            </div>

            <hr className="mb-4" />

            <div className="text-2xl font-bold text-black mb-2">US $10,040.00</div>
            <p className="text-sm mb-4">
                Lorem ipsum dolor sit amet consectetur. Erat ultricies eget sed id.
            </p>

            <div className="text-sm mb-4">
                <p><strong>Condition:</strong> Used</p>
                <p><strong>Quantity:</strong> 300</p>
            </div>

            <button className="my-1 bg-darkgreen hover:bg-green mx-auto w-full text-white p-2 rounded-full border-solid border-4 border-black">
                BUY
            </button>
            <button className="my-1 bg-gray-300 hover:bg-white mx-auto w-full text-black p-2 rounded-full border-solid border-4 border-black">
                Add to cart
            </button>
            <button className="my-1 bg-gray-300 hover:bg-white mx-auto w-full text-black p-2 rounded-full border-solid border-4 border-black">
                Add to watch list
            </button>
        </div>
    )
}
export default ProductSideBar;