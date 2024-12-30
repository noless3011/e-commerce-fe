"use client";
import React, { useState } from "react";
import ItemsResult from "./ItemsResult";
import { ProductApi } from "@/app/utils/ApiClient";
import { ProductControllerFindPaginationTypesEnum } from "@/api";
import { ProductControllerFindPaginationSortByEnum } from "@/api";
import Product, { mapProductResponseToProduct } from "@/app/types/Product";


const FindItems: React.FC = () => {
    const [page] = useState(1);
    const [pageSize] = useState(10);
    const [keywords, setKeywords] = useState("");
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("createdTime");
    const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("DESC");

    const [results, setResults] = useState<Product[]>([]); // Định nghĩa kết quả là mảng các ProductItem
    const [showResults, setShowResults] = useState(false);
    const [showForm, setShowForm] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const params = {
                page,
                pageSize,
                search: keywords,
                types: category ? [category as ProductControllerFindPaginationTypesEnum] : [],
                sortBy: sortBy as ProductControllerFindPaginationSortByEnum,
                sortOrder,
            };

            const callProductApiFunc = await ProductApi.productControllerFindPagination(
                params.page,
                params.pageSize,
                params.search,
                params.types,
                params.sortBy,
                params.sortOrder
            );

            // Lấy dữ liệu từ response.data và ép kiểu về ProductPaginationResponse
            const res = await callProductApiFunc();
            const tempProductList = res.data.data.map((dto) => mapProductResponseToProduct(dto));
            setResults(tempProductList || []); // Dữ liệu là mảng các sản phẩm
            setShowResults(true);
            setShowForm(false);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleBack = () => {
        setShowForm(true);
        setShowResults(false);
    };

    return (
        <div className="container mx-auto max-w-4xl bg-white rounded-lg">
            {showForm && (
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Phần từ khóa */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="keywords"
                            className="text-lg font-medium text-gray-700 mb-2"
                        >
                            Keywords
                        </label>
                        <input
                            id="keywords"
                            type="text"
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                            className="p-4 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            placeholder="Enter keywords"
                        />
                    </div>

                    {/* Phần danh mục */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="category"
                            className="text-lg font-medium text-gray-700 mb-2"
                        >
                            Category
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="">Select Category</option>
                            <option value="Electronic">Electronic</option>
                            <option value="Groceries">Groceries</option>
                        </select>
                    </div>

                    {/* Phần Sắp xếp */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="sortBy"
                            className="text-lg font-medium text-black mb-2"
                        >
                            Sort By
                        </label>
                        <select
                            id="sortBy"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="p-4 border border-gray-300 text-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="createdTime">Created Time</option>
                            <option value="price">Price</option>
                            <option value="rating">Rating</option>
                            <option value="remaining">Remaining</option>
                            <option value="soldNumber">Sold Number</option>
                        </select>
                    </div>

                    {/* Phần Sắp xếp theo thứ tự */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="sortOrder"
                            className="text-lg font-medium text-gray-700 mb-2"
                        >
                            Sort Order
                        </label>
                        <select
                            id="sortOrder"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as "ASC" | "DESC")}
                            className="p-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            <option value="DESC">DESC</option>
                            <option value="ASC">ASC</option>
                        </select>
                    </div>

                    {/* Nút tìm kiếm */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-darkgreen text-white rounded-md hover:bg-green focus:outline-none focus:ring-4 focus:ring-yellow-300"
                        >
                            Search
                        </button>
                    </div>
                </form>
            )}

            {showResults && (
                <div>
                    <div className="flex justify-start mb-4">
                        <button
                            onClick={handleBack}
                            className="px-4 py-2 bg-darkgreen text-white rounded-md hover:bg-green focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center"
                        >
                            <span style={{ fontSize: "20px" }}>←</span>
                        </button>
                    </div>
                    <ItemsResult results={results} />
                </div>
            )}
        </div>
    );
};

export default FindItems;
