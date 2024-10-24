import ProductSideBar from "./ProductSideBar"


export type Product = {
    name: string,
    images: string[],
    price: number,
    smallDescription: string,
    shop: string,
    condition: string,
    quantity: number
}

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
        <div className="flex flex-col gap-4">
            <div className="flex flex-row">
                <ProductSideBar product={product} />
            </div>
        </div>
    )
}