import { UserResponseDto } from "@/api";
import { RootState } from "@/app/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface AccountInfoProps {
    account: UserResponseDto | undefined
}

const AccountInfo: React.FC<AccountInfoProps> = () => {
    const [username, setUsername] = useState<string>();
    const authInfo = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        setUsername(authInfo.user?.username);
    }, [authInfo])
    return (<div className="flex flex-row items-center gap-2">
        <div className="relative h-10 aspect-square rounded-full overflow-hidden">
            <Image
                src={authInfo.user?.avatar || "/images/categories/default-avatar.jpg"}
                alt="avatar"
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg "
                crossOrigin='anonymous'
            />
        </div>
        <div className="w-fit">
            {username}
        </div>
    </div>)
}

export default AccountInfo;

