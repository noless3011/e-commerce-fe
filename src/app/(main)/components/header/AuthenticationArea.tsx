import React, { SetStateAction, useEffect } from "react";
import { UserApi } from "@/app/utils/ApiClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticationButton from "./AuthenticationButtons";
import AccountInfo from "./AccountInfo";
import { UserResponseDto } from "@/api";
import CartButton from "./CartButton";




const AuthenticationArea = () => {
    const [loginState, setLoginState] = useState(false);
    const [account, setAccount] = useState<UserResponseDto>();
    const checkLogin = async (): Promise<boolean> => {
        try {
            const checkLoginFunc = await UserApi.userControllerGetCurrentUser();
            const checkLoginRes = await checkLoginFunc();
            console.log("CHeck login")
            if (checkLoginRes.status === 200) {
                console.log(checkLoginRes);
                setAccount(checkLoginRes.data);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("error", error);
            return false;
        }

    }
    useEffect(() => {
        const updateLoginState = async () => {
            const isLoggedIn = await checkLogin();
            setLoginState(isLoggedIn);
        };
        updateLoginState();
    }, [])
    const router = useRouter();
    const loginRedirect = () => {
        router.push('/account/login')
    }

    const registerRedirect = () => {
        router.push('/account/register')
    }
    return (
        <div className="flex flex-row h-full items-center">
            {
                !loginState ?
                    <AuthenticationButton login={loginRedirect} register={registerRedirect} />
                    :
                    (
                        <div className="flex flex-row items-center content-center gap-4">
                            <CartButton />
                            <AccountInfo account={account} />
                        </div>
                    )
            }
        </div>
    )
}

export default AuthenticationArea;