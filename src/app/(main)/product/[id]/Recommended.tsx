'use client'; // Make this component a client component

import React from 'react';
import Product from './Product'; // Ensure the correct path to the Product component
import { ProductStatus, ProductType } from '@/app/types/Product';

const Recommended: React.FC = () => {
    const sampleProducts = [
        {
            id: 'f867a1b2-c3d4-4e5f-8a9b-0c1d2e3f4a5b',
            created_at: new Date('2024-01-15T10:00:00Z').toISOString(),
            updated_at: new Date('2024-01-16T14:30:00Z').toISOString(),
            status: 'Available' as ProductStatus,
            name: 'Wireless Noise-Cancelling Headphones',
            description: 'Experience immersive sound with these comfortable and high-quality wireless headphones.',
            images: [
                'https://picsum.photos/600/400?random=1', // Placeholder image 1
                'https://picsum.photos/600/400?random=2', // Placeholder image 2
            ],
            price: 199.99,
            discount: 5,
            rating: 4.6,
            remaining: 75,
            soldNumber: 150,
            totalLike: 420,
            totalReview: 95,
            ownerId: 201,
            types: ['Electronic'] as ProductType[],
            createdTime: new Date('2024-01-15T10:00:00Z').getTime(),
        },
        {
            id: '9c8b7a6d-e5f4-4321-b0a9-87654321fedc',
            created_at: new Date('2024-02-01T15:45:00Z').toISOString(),
            updated_at: new Date('2024-02-05T09:15:00Z').toISOString(),
            status: 'SoldOut' as ProductStatus,
            name: 'Organic Cotton T-Shirt - Blue',
            description: 'Soft and breathable t-shirt made from 100% organic cotton.',
            images: [
                'https://picsum.photos/400/600?random=3', // Placeholder image 1
                'https://picsum.photos/400/600?random=4', // Placeholder image 2
            ],
            price: 24.99,
            discount: 0,
            rating: 4.2,
            remaining: 0,
            soldNumber: 300,
            totalLike: 280,
            totalReview: 60,
            ownerId: 202,
            types: ['Clothing'] as ProductType[],
            createdTime: new Date('2024-02-01T15:45:00Z').getTime(),
        },
        {
            id: '2e3d4c5b-a6f7-4890-b1c2-3d4e5f6a7b8c',
            created_at: new Date('2024-02-10T08:30:00Z').toISOString(),
            updated_at: new Date().toISOString(),
            status: 'Available' as ProductStatus,
            name: 'Smart Instant Pot - 6 Quart',
            description: 'Versatile and convenient multi-cooker for quick and easy meals.',
            images: [
                'https://picsum.photos/500/500?random=5', // Placeholder image 1
                'https://picsum.photos/500/500?random=6', // Placeholder image 2
                'https://picsum.photos/500/500?random=7', // Placeholder image 3
            ],
            price: 89.99,
            discount: 10,
            rating: 4.7,
            remaining: 30,
            soldNumber: 85,
            totalLike: 190,
            totalReview: 45,
            ownerId: 203,
            types: ['HomeAppliance'] as ProductType[],
            createdTime: new Date('2024-02-10T08:30:00Z').getTime(),
        },
        {
            id: '7b8a9c1d-e2f3-4456-a7b8-9c1d2e3f4a5b',
            created_at: new Date('2024-02-18T12:00:00Z').toISOString(),
            updated_at: new Date('2024-02-18T12:00:00Z').toISOString(),
            status: 'ComingSoon' as ProductStatus,
            name: 'Next-Gen Gaming Console',
            description: 'Experience cutting-edge gaming with our powerful new console.',
            images: [
                'https://picsum.photos/800/600?random=8', // Placeholder image
            ],
            price: 499.99,
            discount: 0,
            rating: 0,
            remaining: 0,
            soldNumber: 0,
            totalLike: 500,
            totalReview: 0,
            ownerId: 204,
            types: ['Electronic'] as ProductType[],
            createdTime: new Date('2024-02-18T12:00:00Z').getTime(),
        },
        {
            id: '3f4e5d6c-b7a8-4901-c2d3-e4f5a6b7c8d9',
            created_at: new Date('2024-02-22T09:00:00Z').toISOString(),
            updated_at: new Date().toISOString(),
            status: 'Available' as ProductStatus,
            name: 'Comfortable Running Shoes - Size 9',
            description: 'Lightweight and supportive running shoes for optimal performance.',
            images: [
                'https://picsum.photos/700/500?random=9', // Placeholder image 1
                'https://picsum.photos/700/500?random=10', // Placeholder image 2
                'https://picsum.photos/700/500?random=11', // Placeholder image 3
            ],
            price: 79.99,
            discount: 15,
            rating: 4.4,
            remaining: 15,
            soldNumber: 60,
            totalLike: 120,
            totalReview: 30,
            ownerId: 205,
            types: ['Clothing'] as ProductType[],
            createdTime: new Date('2024-02-22T09:00:00Z').getTime(),
        },
    ];

    return (
        <div className="p-5 bg-white rounded-lg shadow-md mx-auto my-5 max-w-[100%]"> {/* Adjusted max width */}
            <h2 className="mb-5 text-black text-xl font-semibold">Recommended</h2>
            <div className="flex justify-start items-end gap-2 overflow-x-scroll pb-2 scrollbar-thin scrollbar-thumb-gray-400">
                {sampleProducts.map((product, index) => (
                    <Product
                        key={index}
                        product={product}
                        onHover={(isHovering) => { }} // Pass an empty handler or implement hover behavior
                    />
                ))}
            </div>
        </div>
    );
};

export default Recommended;
