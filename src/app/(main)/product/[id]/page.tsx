import ProductImagesSlider from "./ProductImagesSlider"
import ProductSideBar from "./ProductSideBar"
import ProductImagePicker from "./ProductImagePicker"
import Product from "@/app/types/Product"
import Recommended from "./Recommended"
import Reviews from "./Reviews"
import ChatButton from "./ChatButton"

export default function ProductPage() {
    const images: string[] = Array.from({ length: 3 }, (_, i) => `text${i + 1}`)

    const product: Product = {
        id: 'a1b2c3d4-e5f6-4789-a0b1-2c3d4e5f6789',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        status: "Available",
        name: 'Smart Bluetooth Speaker',
        description: 'Enjoy crystal-clear audio and seamless smart home integration with our latest Bluetooth speaker. Features voice control, wireless charging, and a sleek design.',
        images: [
            'https://picsum.photos/500',
            'https://picsum.photos/500',
            'https://picsum.photos/400',
            'https://picsum.photos/700',
            'https://picsum.photos/500/300',
            'https://picsum.photos/500',
            'https://picsum.photos/500',
            'https://picsum.photos/700/500',
            'https://picsum.photos/500/700',
            'https://picsum.photos/300/700',
            'https://picsum.photos/100',
        ],
        price: 79.99,
        discount: 10,
        rating: 4.5,
        remaining: 25,
        soldNumber: 75,
        totalLike: 210,
        totalReview: 55,
        ownerId: 102,
        types: ["Electronic"],
        createdTime: Date.now(),
    };


    return (
        <div className="flex flex-col gap-4 h-fit mt-4 w-4/5 mx-auto">
            <div className="grid grid-cols-[7rem_1.8fr_1fr] gap-4 items-stretch">
                <ProductImagePicker product={product}></ProductImagePicker>
                <ProductImagesSlider product={product}></ProductImagesSlider>
                <ProductSideBar product={product} />
            </div>
            <Recommended></Recommended>
            <Reviews></Reviews>
            <ChatButton />
        </div>
    )
}