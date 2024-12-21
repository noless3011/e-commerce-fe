'use client';

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { UserApi } from './ApiClient';
import React from 'react';



function CheckAuthHandler() {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = async () => {
            try {
                const checkLoginFunc = await UserApi.userControllerGetCurrentUser();
                const checkLoginRes = await checkLoginFunc();
                console.log("CHeck login")
                if (checkLoginRes.status === 200) {
                    
                } else {
                    return false;
                }
            } catch (error) {
                console.log("error", error);
                return false;
            }
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        // Cleanup function (optional but recommended)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router]);


    // This component doesn't actually render anything visible.
    return null;
}

export default CheckAuthHandler;