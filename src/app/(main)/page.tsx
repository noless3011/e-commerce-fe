'use client';
import { useEffect, useState } from "react";
import { ProductApi } from "../utils/ApiClient";
import CategoryCard from "./components/landing/CategoryCard";
import CategoryGrid from "./components/landing/CategoryGrid";
import ProductCard from "./components/landing/ProductCard";
import ProductGridList from "./components/landing/ProductGridList";
import ProductHorizontalList from "./components/landing/ProductHorizontalList";
import Product, { mapProductResponseToProduct, ProductType } from "../types/Product";
import LoadingAnimation from "./components/landing/LoadingAnimationCards";
import LoadingCard from "./components/landing/LoadingCard";
import Pagination from "./components/landing/Pagination";

export default function Page() {
    const [hotSalesProducts, setHotSalesProducts] = useState<Product[]>([]);
    const [newArrivalsProducts, setNewArrivalsProducts] = useState<Product[]>([]);
    const [recentSearchedProducts, setRecentSearchedProducts] = useState<Product[]>([]);
    const [suggestionProducts, setSuggestionProducts] = useState<Product[]>([]);
    const [discoveryProducts, setDiscoveryProducts] = useState<Product[]>([]);
    const [paginatedProducts, setPaginatedProducts] = useState<Product[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 20;
    const productTypeArray: ProductType[] = [
        "Electronic",
        "Groceries",
        "Clothing",
        "HomeAppliances",
        "Books",
        "BeautyAndHealth",
        "SportsAndOurDoors",
        "ToysAndGames",
        "Furniture",
        "Automotive",
    ];
    const [categoryProducts] = useState<ProductType[]>(productTypeArray);

    useEffect(() => {
        const fetchHotSales = async () => {
            try {
                const getHotSales = await ProductApi.productControllerFindBestSale();
                const res = await getHotSales();
                const listProductGot = res.data;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setHotSalesProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching hot sales:", error);
            }
        };

        const fetchNewArrivals = async () => {
            try {
                const getNewArrivals = await ProductApi.productControllerFindNewest();
                const res = await getNewArrivals();
                const listProductGot = res.data;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setNewArrivalsProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching new arrivals:", error);
            }
        };

        const fetchRecentSearched = async () => {
            try {
                const getRecentSearched = await ProductApi.productControllerFindRecentSearch();
                const res = await getRecentSearched();
                const listProductGot = res.data;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setRecentSearchedProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching recent searched:", error);
            }
        };

        const fetchSuggestions = async () => {
            try {
                const getSuggestions = await ProductApi.productControllerFindSuggestion();
                const res = await getSuggestions();
                const listProductGot = res.data;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setSuggestionProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching suggestions:", error);
            }
        };

        const fetchDiscovery = async () => {
            try {
                const getDiscovery = await ProductApi.productControllerFindDiscovery();
                const res = await getDiscovery();
                const listProductGot = res.data;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setDiscoveryProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching discovery:", error);
            }
        };

        fetchHotSales();
        fetchNewArrivals();
        fetchRecentSearched();
        fetchSuggestions();
        fetchDiscovery();
    }, []);

    useEffect(() => {
        const fetchPaginatedProducts = async () => {
            try {
                const getPaginated = await ProductApi.productControllerFindPagination(
                    currentPage,
                    itemsPerPage,
                    "",
                );
                const res = await getPaginated();
                const listProductGot = res.data.data;
                const total = res.data.total;
                const mappedProducts = listProductGot.map(mapProductResponseToProduct);
                setPaginatedProducts(mappedProducts);
                setTotalPages(Math.ceil(total / itemsPerPage));
                console.log("length: " + listProductGot.length);
            } catch (error) {
                console.error("Error fetching paginated products:", error);
            }
        };
        fetchPaginatedProducts();
    }, [currentPage, itemsPerPage]);

    const categoriesImage: Array<string> = [
        '/images/categories/Electronic.avif',
        '/images/categories/Groceries.jpg',
        '/images/categories/Clothing.avif',
        '/images/categories/HomeAppliances.jpg',
        '/images/categories/Books.jpg',
        '/images/categories/BeautyAndHealth.jpg',
        '/images/categories/SportsAndOurDoors.jpg',
        '/images/categories/ToysAndGames.jpg',
        '/images/categories/Furniture.jpg',
        '/images/categories/Automotive.jpg'
    ];

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="w-full flex flex-col items-center gap-8">
            <div className="h-10"></div>
            <CategoryGrid>
                {categoryProducts.map((category, index) => (
                    <CategoryCard
                        key={index} // Use a unique key for each card
                        imageUrl={categoriesImage[index]} // Use a placeholder image
                        categoryName={category}
                    />
                ))}
            </CategoryGrid>

            <ProductHorizontalList title="Hot Sales">
                {hotSalesProducts.length === 0 ? (<LoadingAnimation></LoadingAnimation>) : (hotSalesProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cardW={250} // Adjust as needed
                        cardH={350} // Adjust as needed
                    />
                )))}
            </ProductHorizontalList>

            <ProductHorizontalList title="New Arrivals">
                {newArrivalsProducts.length === 0 ? (<LoadingAnimation></LoadingAnimation>) : (newArrivalsProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cardW={250} // Adjust as needed
                        cardH={350} // Adjust as needed
                    />
                )))}
            </ProductHorizontalList>
            <ProductHorizontalList title="Recent Searched">
                {recentSearchedProducts.length === 0 ? (<LoadingAnimation></LoadingAnimation>) : (recentSearchedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cardW={250} // Adjust as needed
                        cardH={350} // Adjust as needed
                    />
                )))}
            </ProductHorizontalList>
            <ProductHorizontalList title="Your most viewed category">
                {suggestionProducts.length === 0 ? (<LoadingAnimation></LoadingAnimation>) : (suggestionProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cardW={250} // Adjust as needed
                        cardH={350} // Adjust as needed
                    />
                )))}
            </ProductHorizontalList>
            <ProductHorizontalList title="Discovery">
                {discoveryProducts.length === 0 ? (<LoadingAnimation></LoadingAnimation>) : (discoveryProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        cardW={250} // Adjust as needed
                        cardH={350} // Adjust as needed
                    />
                )))}
            </ProductHorizontalList>
            <div className="h-10 text-3xl font-bold mt-10">
                All Products
            </div>
            <ProductGridList itemsPerPage={itemsPerPage}>
                {paginatedProducts.length === 0 ?
                    (Array.from({ length: itemsPerPage }).map((_, index) => (
                        <LoadingCard key={index} />
                    )))
                    :
                    (paginatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            cardW={250} // Adjust as needed
                            cardH={350} // Adjust as needed
                        />
                    )))}
            </ProductGridList>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            <div className="h-96"></div>
        </div>
    )
}