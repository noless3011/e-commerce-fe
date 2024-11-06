import { useRouter } from "next/navigation";


const AuthenticationButton = () => {

    const router = useRouter();
    const login = () => {
        router.push("/authentication/login");
    }
    const register = () => {
        router.push("/authentication/register");
    }

    return (<>
        <button onClick={login} className="w-32 h-3/4 mx-1 px-2 rounded-lg bg-white">Login</button>
        <button onClick={register} className="w-32 h-3/4 mx-1 px-2 rounded-lg bg-darkgreen text-white">Register</button>
    </>)
}
export default AuthenticationButton;