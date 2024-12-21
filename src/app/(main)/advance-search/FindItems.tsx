"use client"
import React, { useState } from "react";

const FindItems: React.FC = () => {
    const [keywords, setKeywords] = useState("");
    const [category, setCategory] = useState("");
    const [priceRange, setPriceRange] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [checkboxOptions, setCheckboxOptions] = useState({
        freeShipping: false,
        returnsAccepted: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCheckboxOptions({ ...checkboxOptions, [name]: checked });
    };

    return (
        <div className="container mx-auto p-8 max-w-4xl bg-white rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
            {/* Keywords Section */}
            <div className="flex flex-col">
                <label htmlFor="keywords" className="text-lg font-medium text-gray-700 mb-2">
                    Keywords
                </label>
                <input
                    id="keywords"
                    type="text"
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter keywords"
                />
            </div>

            {/* Category Section */}
            <div className="flex flex-col">
                <label htmlFor="category" className="text-lg font-medium text-gray-700 mb-2">
                    Category
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    <option value="" className="text-gray-700">Select Category</option>
                    <option value="electronics" className="text-gray-700">Electronics</option>
                    <option value="fashion" className="text-gray-700">Fashion</option>
                    <option value="home" className="text-gray-700">Home</option>
                </select>
            </div>

            {/* Price Range Section */}
            <div className="flex flex-col">
                <label htmlFor="priceRange" className="text-lg font-medium text-gray-700 mb-2">
                    Price Range
                </label>
                <input
                    id="priceRange"
                    type="text"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="e.g., $10 - $100"
                />
            </div>

            {/* Free Shipping Section */}
            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    id="freeShipping"
                    name="freeShipping"
                    checked={checkboxOptions.freeShipping}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                />
                <label htmlFor="freeShipping" className="text-lg font-medium text-gray-700">
                    Free Shipping
                </label>
            </div>

            {/* Returns Accepted Section */}
            <div className="flex items-center space-x-3">
                <input
                    type="checkbox"
                    id="returnsAccepted"
                    name="returnsAccepted"
                    checked={checkboxOptions.returnsAccepted}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-yellow-500 border-gray-300 rounded focus:ring-2 focus:ring-yellow-500"
                />
                <label htmlFor="returnsAccepted" className="text-lg font-medium text-gray-700">
                    Returns Accepted
                </label>
            </div>

            {/* Sort By Section */}
            <div className="flex flex-col">
                <label htmlFor="sortBy" className="text-lg font-medium text-black mb-2">
                    Sort By
                </label>
                <select
                    id="sortBy"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-4 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                    <option value="" className="text-gray-700">Select Sorting</option>
                    <option value="bestMatch" className="text-gray-700">Best Match</option>
                    <option value="priceLowToHigh" className="text-gray-700">Price: Low to High</option>
                    <option value="priceHighToLow" className="text-gray-700">Price: High to Low</option>
                </select>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
                <button
                    type="submit"
                    className="px-8 py-3 bg-darkgreen text-white rounded-md hover:bg-green focus:outline-none focus:ring-4 focus:ring-yellow-300"
                >
                    Search
                </button>
            </div>
            </form>
        </div>
    );
};

export default FindItems;
