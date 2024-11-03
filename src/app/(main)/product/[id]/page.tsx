import ProductImagesSlider from "./ProductImagesSlider"
import ProductSideBar from "./ProductSideBar"
import ProductImagePicker from "./ProductImagePicker"
import { Product } from "@/app/types/Product"
import Recommended from "../Recommended"
import Reviews from "../Reviews"

export default function ProductPage() {
    const images: string[] = Array.from({ length: 3 }, (_, i) => `text${i + 1}`)

    const product: Product = {
        name: "Test Product",
        images: images,
        price: 100,
        smallDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        shop: "abc shop",
        condition: "good",
        quantity: 12
    }

    return (
        <div className="flex flex-col gap-4 h-fit mt-4 w-4/5 mx-auto"> 
            <div className="grid grid-cols-[7rem_1.8fr_1fr] gap-4 items-stretch">
                <ProductImagePicker></ProductImagePicker>
                <ProductImagesSlider></ProductImagesSlider>
                <ProductSideBar product={product} />
            </div>
            <Recommended></Recommended>
            <Reviews></Reviews>
        </div>
    )
}