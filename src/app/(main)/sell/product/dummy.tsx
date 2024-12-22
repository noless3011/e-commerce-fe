// data/products.ts
import Product, { ProductStatus, ProductType } from '@/app/types/Product';

const dummyProduct: Product = {
    id: '1',
    created_at: '2023-10-27T10:00:00Z',
    updated_at: '2023-10-27T11:00:00Z',
    status: 'Available', // Updated to use string literal
    name: 'Indoor Succulent Plants',
    description: 'A beautiful indoor succulent plant.',
    images: ['https://picsum.photos/200'], // You'll need to add an actual image
    price: 25.00,
    discount: 0,
    rating: 4.5,
    remaining: 50,
    soldNumber: 46,
    totalLike: 120,
    totalReview: 30,
    ownerId: 1,
    types: ['HomeAppliance'], // Updated to use string literal
    createdTime: 1698400800000,
};

export const products: Product[] = [dummyProduct, dummyProduct, dummyProduct];