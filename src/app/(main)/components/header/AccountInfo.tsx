import { UserResponseDto } from "@/api";

interface AccountInfoProps {
    account: UserResponseDto | undefined
}

const AccountInfo: React.FC<AccountInfoProps> = () => {
    return (<div className="flex flex-row items-center gap-2">
        <div className="h-10 aspect-square rounded-full overflow-hidden">
            <img
                src="https://picsum.photos/300/300"
                alt="avatar"
                className="w-full h-full object-contain rounded-t-lg "
            />
        </div>
        <div className="w-fit">
            This is user name
        </div>
    </div>)
}

export default AccountInfo;