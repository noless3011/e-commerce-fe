
import Image from "next/image";
import React from "react";

interface ThumbnailProps {
    src: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ src }) => {
    return (
        <div className="relative w-full aspect-square bg-slate-500 overflow-hidden rounded-2xl">
            <Image src={src} alt='Thumbnail products' crossOrigin='anonymous' layout='fill' objectFit="contain" />
        </div>
    );
}

export default Thumbnail;