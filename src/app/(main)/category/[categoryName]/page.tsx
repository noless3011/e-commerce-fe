'use client';
import ProductCard from "./ProductCard";
import ProductGridList from "@/app/(main)/components/landing/ProductGridList"; // Assuming ProductGridList is in components
import React from 'react';

interface CategoryPageParams {
    params: {
        categoryName: string;
    };
}

const CategoryPage = ({ params }: CategoryPageParams) => {
    const { categoryName } = params;
    const normalizedCategoryName = categoryName.replace(/-/g, ' '); // For display purposes

    return (
        <div className="container mx-auto p-4">
            {/* Category Title and Overview */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">{normalizedCategoryName}</h1>
                <p className="text-gray-600 mt-2">
                    Explore our wide selection of {normalizedCategoryName.toLowerCase()} products.
                    Find the perfect item for your needs.
                </p>
                {/* Optional: Add category image or description here */}
            </div>

            {/* Product Filtering and Sorting Options (Example) */}
            <div className="flex justify-between items-center mb-4">
                <div>
                    {/* Add filter toggles or dropdowns here */}
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded inline-flex items-center">
                        Filter
                    </button>
                </div>
                <div>
                    {/* Add sorting options here */}
                    <select className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded">
                        <option>Sort by: Featured</option>
                        <option>Sort by: Price (Low to High)</option>
                        <option>Sort by: Price (High to Low)</option>
                        <option>Sort by: Newest</option>
                    </select>
                </div>
            </div>

            {/* Product Grid List */}
            <div className="flex flex-row h-fit w-full">
                <ProductGridList itemsPerPage={20}>
                    {Array.from({ length: 600 }, (_, index) => (
                        <ProductCard
                            key={`${index}`}
                            id={`${index}`}
                            name="Original Apple Silicone Case with Wireless Magnetic Charger and Something else"
                            image="https://picsum.photos/200/200"
                            cardH={400}
                            cardW={230}
                            price={1999}
                            url={`/product/${index}`} // Consider a more meaningful URL
                            discount={90}
                        />
                    ))}
                </ProductGridList>
                <div className="flex-grow h-fit flex flex-col">
                    <>Banner area</>

                </div>
            </div>
        </div>
    );
};

export default CategoryPage;