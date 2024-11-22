"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import AddProductForm from "./AddProductForm";
import OrderStatus from "./OrderStatus";
import ProductList from "./ProductList";

const SellerPage = () => {
  const [activeTab, setActiveTab] = useState("selling"); // Quản lý tab chính
  const [activeSubPage, setActiveSubPage] = useState("addProduct"); // Quản lý subpage

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {activeTab === "selling" && (
          <aside className="w-1/4">
            <Sidebar
              activeSubPage={activeSubPage}
              setActiveSubPage={setActiveSubPage}
            />
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-8 bg-white">
          {activeTab === "selling" && activeSubPage === "addProduct" && <AddProductForm />}
          {activeTab === "selling" && activeSubPage === "productList" && <ProductList />}
          {activeTab === "selling" && activeSubPage === "orders" && <OrderStatus />}
          {activeTab === "selling" && activeSubPage === "saleOffers" && (
            <div className="text-gray-500">
              <p>Sale offers will be displayed here.</p>
            </div>
          )}
          {activeTab === "messages" && (
            <div className="text-gray-500 text-lg">
              <p>No messages yet. Check back later.</p>
            </div>
          )}
          {activeTab === "account" && (
            <div className="text-gray-500 text-lg">
              <p>Account settings will be displayed here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default SellerPage;
