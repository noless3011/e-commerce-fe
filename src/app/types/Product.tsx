import { ProductResponseDto, ProductResponseDtoTypesEnum } from "@/api";
import { CreateProductDto, CreateProductDtoTypesEnum } from "@/api";
export type ProductStatus = "SoldOut" | "Available" | "ComingSoon"; // Extendable for other statuses

export type ProductType =
    | "Electronic"
    | "Groceries"
    | "Clothing"
    | "HomeAppliances"
    | "Books"
    | "BeautyAndHealth"
    | "SportsAndOurDoors"
    | "ToysAndGames"
    | "Furniture"
    | "Automotive"; // Extendable for other types

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


export function convertProductToCreateProductDto(product: Product): CreateProductDto {
    const createProductDto: CreateProductDto = {
        name: product.name,
        description: product.description,
        image: product.images,
        price: product.price,
        discount: product.discount,
        rating: product.rating,
        soldNumber: product.soldNumber,
        remaining: product.remaining,
        types: product.types.filter((type) =>
            Object.values(CreateProductDtoTypesEnum).includes(
                type as CreateProductDtoTypesEnum
            )
        ) as CreateProductDtoTypesEnum[], // Filter valid types and cast
    };

    return createProductDto;
}