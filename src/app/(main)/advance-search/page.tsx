"use client";
import FindItems from "./FindItems";
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import FindStores from "./FindStores";
import Header from "./Header";
import SearchResult from "./SearchResult";
import { useSearchParams, useRouter } from "next/navigation";

const AdvancedSearchPage = () => {
    const [activeTab, setActiveTab] = useState("search");
    const [activeSubPage, setActiveSubPage] = useState("findItems");
    const searchParams = useSearchParams();
    const router = useRouter();

    const keywords = searchParams.get("keywords") || "";
    const category = searchParams.get("category") || "";

    useEffect(() => {
        const activeSubPageParam = searchParams.get("activeSubPage");
        if (activeSubPageParam) {
            setActiveSubPage(activeSubPageParam);
        }
    }, [searchParams]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <div className="flex flex-1">
                {activeTab === "search" && (
                    <aside className="w-1/4">
                        <Sidebar
                            activeSubPage={activeSubPage}
                            setActiveSubPage={setActiveSubPage}
                        />
                    </aside>
                )}
                <main className="flex-1 p-8 bg-white">
                    {activeTab === "search" && activeSubPage === "findItems" && <FindItems />}
                    {activeTab === "search" && activeSubPage === "findStores" && <FindStores />}
                    {activeTab === "search" && activeSubPage === "searchResults" && (
                        <SearchResult keywords={keywords} category={category} />
                    )}
                </main>
            </div>
        </div>
    );
};

export default AdvancedSearchPage;
