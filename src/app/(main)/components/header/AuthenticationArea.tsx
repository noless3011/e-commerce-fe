import React, { SetStateAction, useEffect } from "react";
import { UserApi } from "@/app/utils/ApiClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticationButton from "./AuthenticationButton";
import AccountInfo from "./AccountInfo";




const AuthenticationArea = () => {
    const [loginState, setLoginState] = useState(false);
    const checkLogin = async (): Promise<boolean> => {
        try {

            // const checkLoginFunc = await UserApi.userControllerGetCurrentUser();
            // const checkLoginRes = await checkLoginFunc();
            // if (checkLoginRes.status === 200) {
            //     console.log(checkLoginRes);
            //     return true;
            // } else {
            //     return false;
            // }
        } catch (error) {
            console.log(234, error);
            return false;
        }

    }
    useEffect(() => {
        const updateLoginState = async () => {
            const isLoggedIn = await checkLogin();
            console.log("123", isLoggedIn);
            setLoginState(isLoggedIn);
        };
        updateLoginState();
    }, [])
    return (
        <div className="flex flex-row h-full items-center">
            {
                loginState ? <AccountInfo /> : <AuthenticationButton />
            }
        </div>
    )
}

export default AuthenticationArea;