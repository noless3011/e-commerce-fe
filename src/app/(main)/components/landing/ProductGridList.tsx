import ProductCard from "./ProductCard"
import React from 'react';
import { ReactNode } from 'react';

interface ProductGridListProps {
    children: ReactNode
}

const ProductGridList: React.FC<ProductGridListProps> = ({ children }) => {
    return (<div className="w-2/3 h-fit">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {children}
        </div>
    </div>)
}

export default ProductGridList;