'use client'; // Mark this component as a client component
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { useEffect } from "react";

export default function SellLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Check if the user is directly on the parent route
        if (pathname === '/sell') {
            // Redirect to the default child route (e.g., /parent/child1)
            router.replace('/sell/dashboard');
        }
    }, [pathname, router]);
    return (
        <div className="flex flex-row w-full h-full">
            <Sidebar></Sidebar>
            {children}
        </div>
    );
}
