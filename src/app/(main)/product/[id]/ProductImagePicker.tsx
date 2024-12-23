"use client";
import { useEffect, useState, useRef } from "react";
import { ImageList } from "./ImageList";
import Thumbnail from "./Thumbnail";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { motion } from "framer-motion";
import Product from "@/app/types/Product";
interface ProductImagePickerProps {
    product: Product;
}
const ProductImagePicker: React.FC<ProductImagePickerProps> = ({ product }) => {
    const [images, setImages] = useState<Array<string>>();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [stripeHeight, setStripeHeight] = useState(0);

    const imagesStripeDiv = useRef<HTMLDivElement>(null);
    useEffect(() => {
        setImages(product.images);
        if (imagesStripeDiv.current) {
            setStripeHeight(imagesStripeDiv.current.offsetHeight);
        }
    }, [product]);
    const slideDown = () => {
        setPosition({ x: position.x, y: (position.y + 300) > 0 ? position.y : position.y + 300 });
    }

    const slideUp = () => {
        setPosition({ x: position.x, y: (position.y - 300) < -stripeHeight + 450 ? position.y : position.y - 300 })
    }

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <motion.div className="flex flex-col gap-2"
                animate={{ y: position.y }}
                transition={{ duration: 0.5 }}
                ref={imagesStripeDiv}>
                {
                    images?.map((image, index) => (<Thumbnail src={image} index={index}></Thumbnail>))
                }

            </motion.div>
            <button onClick={slideDown} className="absolute left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-[1rem] w-10 aspect-square bg-slate-300/50 backdrop-blur-3xl rounded-full">
                <BiChevronDown className="w-full h-full"></BiChevronDown>
            </button>
            <button onClick={slideUp} className="absolute left-1/2 top-0 transform -translate-x-1/2 translate-y-[1rem] w-10 aspect-square bg-slate-300/50 backdrop-blur-3xl rounded-full">
                <BiChevronUp className="w-full h-full"></BiChevronUp>
            </button>
        </div >
    )
}

export default ProductImagePicker;