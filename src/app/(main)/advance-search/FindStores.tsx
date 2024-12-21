"use client"
import { SocketAddress } from "net";
import React, { useState } from "react";

const FindStores: React.FC = () => {
    const [keywords, setKeywords] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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

            <div className="flex flex-col">
                <label htmlFor="address" className="text-lg font-medium text-gray-700 mb-2">
                    Address
                </label>
                <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Enter address"
                />
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

export default FindStores;
