import { ProductResponseDto, ProductResponseDtoTypesEnum } from "@/api";

type ProductStatus = "SoldOut" | "Available" | "ComingSoon"; // Extendable for other statuses

type ProductType = "Electronic" | "Clothing" | "HomeAppliance"; // Extendable for other types

export default interface Product {
    id: string;
    created_at: string;
    updated_at: string;
    status: ProductStatus;
    name: string;
    description: string;
    images: string[];
    price: number;
    discount: number;
    rating: number;
    remaining: number;
    soldNumber: number;
    totalLike: number;
    totalReview: number;
    ownerId: number;
    types: ProductType[];
    createdTime: number;
}

export const mapProductResponseToProduct = (
    response: ProductResponseDto
): Product => {
    return {
        id: response.id,
        created_at: response.created_at,
        updated_at: response.updated_at,
        status: response.status as ProductStatus, // Convert to ProductStatus if needed
        name: response.name,
        description: response.description,
        images: response.images,
        price: response.price,
        discount: response.discount,
        rating: response.rating,
        remaining: response.remaining,
        soldNumber: response.soldNumber,
        totalLike: response.totalLike,
        totalReview: response.totalReview,
        ownerId: response.ownerId,
        types: response.types as ProductType[], // Convert to ProductType[] if needed
        createdTime: response.createdTime,
    };
};