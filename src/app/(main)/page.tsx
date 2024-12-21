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

            <ProductHorizontalList title="Hot Sales">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/1000/1000"
                            cardH={500} cardW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>

            <ProductHorizontalList title="New Arrivals">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/1000/1000"
                            cardH={500} cardW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>
            <ProductHorizontalList title="Recent Searched">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/1000/1000"
                            cardH={500} cardW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>
            <ProductHorizontalList title="Your most viewed category">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/1000/1000"
                            cardH={500} cardW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>
            <ProductHorizontalList title="Discovery">
                {
                    Array.from({ length: 20 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/1000/1000"
                            cardH={500} cardW={300}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductHorizontalList>

            <ProductGridList itemsPerPage={20}>
                {
                    Array.from({ length: 600 }, (_, index) => (
                        <ProductCard key={`${index}`} id={`${index}`} name=" Original Apple Silicone Case with Wireless Magnetic Charger and Something else" image="https://picsum.photos/200/200"
                            cardH={400} cardW={230}
                            price={1999} url="#" discount={90} />
                    ))
                }
            </ProductGridList>

            <div className="h-96"></div>
        </div>
    )
}