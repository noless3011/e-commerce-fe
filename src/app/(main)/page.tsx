import CategoryCard from "./components/landing/CategoryCard";
import CategoryGrid from "./components/landing/CategoryGrid";
import ProductCard from "./components/landing/ProductCard";
import ProductGridList from "./components/landing/ProductGridList";
import ProductHorizontalList from "./components/landing/ProductHorizontalList";

export default function Page() {
    return (
        <div className=" h-fit w-full flex flex-col items-center gap-8">
            <div className="h-10"></div>
            <CategoryGrid>
                {
                    Array.from({ length: 11 }, (_, index) => (
                        <CategoryCard key={index} imageUrl="https://picsum.photos/200/300" categoryName={"Category" + (index + 1).toString()}></CategoryCard>
                    ))
                }

            </CategoryGrid>

            <ProductHorizontalList>
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/300/300"
                            imageH={300} imageW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>

            <ProductGridList>
                {
                    Array.from({ length: 30 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/300/300"
                            imageH={100} imageW={100}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductGridList>

            <div className="h-96"></div>
        </div>
    )
}