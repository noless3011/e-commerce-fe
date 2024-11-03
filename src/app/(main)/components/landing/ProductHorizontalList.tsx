"use client";
import { useState, useRef } from "react"
import { ReactNode } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface ProductHorizontalListProps {
    children: ReactNode;
}

const ProductHorizontalList = ({ children }: ProductHorizontalListProps) => {
    const scrollList = useRef<HTMLDivElement>(null);
    const scroll = (dir: number) => {
        if (scrollList.current) {
            scrollList.current.scrollBy({ left: 300 * dir, behavior: 'smooth' });
        }
    }

    return (
        <div className="relative w-2/3 h-fit flex flex-row justify-center overflow-hidden rounded-2xl">
            <div className="p-4 w-full h-fit overflow-x-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-400"
                ref={scrollList}>
                <div className="flex flex-row gap-4 h-fit">
                    {children}
                </div>
            </div>
            <button onClick={() => scroll(-1)}
                className="absolute left-0 top-1/2 translate-x--1/2 w-20 aspect-square rounded-full bg-slate-300/50 backdrop-blur-3xl">
                <BiChevronLeft className="w-full h-full"></BiChevronLeft>
            </button>
            <button onClick={() => scroll(1)}
                className="absolute right-0 top-1/2 translate-x--1/2 w-20 aspect-square rounded-full bg-slate-300/50 backdrop-blur-3xl">
                <BiChevronRight className="w-full h-full"></BiChevronRight>
            </button>
        </div>

    )
}

export default ProductHorizontalList;