import { BiShoppingBag } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function CartButton() {
    const router = useRouter();
    const redirect = () => {

        router.push("/cart");
    }

    return (<div className="flex flex-row items-center justify-center w-10 aspect-square bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
        <button className="w-28 aspect-square" onClick={redirect}><BiShoppingBag className="w-full h-full"></BiShoppingBag></button>
    </div>)
}
