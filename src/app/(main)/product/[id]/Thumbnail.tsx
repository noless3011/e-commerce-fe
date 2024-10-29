import { data } from "framer-motion/client";
import React from "react";

interface ThumbnailProps {
    index: number,
    src: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({ index, src }) => {
    return (
        <div className="relative w-full aspect-square bg-slate-500 overflow-hidden rounded-2xl">
            <img src={src} className="absolute w-full h-full object-contain" />
        </div>
    );
}

export default Thumbnail;