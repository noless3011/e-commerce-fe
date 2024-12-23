import React, { SetStateAction, useEffect } from "react";
import { UserApi } from "@/app/utils/ApiClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthenticationButton from "./AuthenticationButtons";
import AccountInfo from "./AccountInfo";
import { UserResponseDto } from "@/api";
import CartButton from "./CartButton";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "@/app/redux/authSlice";
import { RootState } from "@/app/redux/store";
import { autoBatchEnhancer, ThunkDispatch } from "@reduxjs/toolkit";

const AuthenticationArea = () => {
    const [loginState, setLoginState] = useState(false);
    const [account, setAccount] = useState<UserResponseDto>();
    const authDispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const authInfo = useSelector((state: RootState) => state.auth)

    useEffect(() => {
        authDispatch(checkLogin());
    }, [authDispatch]);
    useEffect(() => {
        setLoginState(authInfo.isAuthenticated);
        console.log("checking auth", authInfo);
    }, [authInfo.isAuthenticated]);
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