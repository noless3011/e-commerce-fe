import { User } from "@/app/types/User";

interface MessageHeaderProps {
    participant: User | undefined;
}

const MessageHeader: React.FC<MessageHeaderProps> = ({ participant }) => {
    return (
        <div className="p-4 border-b border-gray-200">
            <div className="font-semibold">{participant?.name}</div>
        </div>
    );
};
export default MessageHeader;