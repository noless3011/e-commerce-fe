// components/ProductRow.tsx
import React from 'react';
import Product from '@/app/types/Product';

interface ProductRowProps {
    product: Product;
}

const ProductRow: React.FC<ProductRowProps> = ({ product }) => {
    let statusColor = '';
    let statusText = '';

    switch (product.status) {
        case 'Available':
            statusColor = 'bg-green-100 text-green-800';
            statusText = 'Available';
            break;
        case 'SoldOut':
            statusColor = 'bg-red-100 text-red-800';
            statusText = 'Sold Out';
            break;
        case 'ComingSoon':
            statusColor = 'bg-yellow-100 text-yellow-800';
            statusText = 'Coming Soon';
            break;
        default:
            statusColor = 'bg-gray-100 text-gray-800';
            statusText = product.status;
    }

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="h-10 w-10 mr-2">
                        {product.images[0] && (
                            <img
                                className="h-full w-full rounded object-cover"
                                src={product.images[0]}
                                alt={product.name}
                            />
                        )}
                    </div>
                    <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.soldNumber}</div>
                {/* You can add a sparkline chart here if needed */}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.types[0] === 'Electronic'
                    ? 'bg-blue-100 text-blue-800'
                    : product.types[0] === 'Clothing'
                        ? 'bg-purple-100 text-purple-800'
                        : product.types[0] === 'HomeAppliance'
                            ? 'bg-indigo-100 text-indigo-800'
                            : 'bg-gray-100 text-gray-800'
                    }`}>
                    {product.types[0]}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColor}`}>
                    {statusText}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                ${product.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right font-medium">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                    Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ProductRow;