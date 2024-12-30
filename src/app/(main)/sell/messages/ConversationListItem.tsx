import { Conversation } from "@/app/types/Conversation";

interface ConversationListItemProps {
    conversation: Conversation;
    isSelected: boolean;
    onSelect: (conversationId: number) => void;
    loggedInUserId: number;
}

const ConversationListItem: React.FC<ConversationListItemProps> = ({
    conversation,
    isSelected,
    onSelect,
    loggedInUserId,
}) => {
    const otherUser = conversation.participants.find((user) => user.id !== loggedInUserId);

    return (
        <li
            className={`p-3 hover:bg-gray-100 cursor-pointer ${isSelected ? 'bg-gray-100' : ''}`}
            onClick={() => onSelect(conversation.id)}
        >
            <div className="flex items-center space-x-2">
                {otherUser?.avatar && (
                    <img src={otherUser.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                )}
                <div>
                    <div className="font-medium">{otherUser?.name}</div>
                    <div className="text-sm text-gray-500 truncate">{conversation.lastMessage?.content}</div>
                    {conversation.unreadCount != null && conversation.unreadCount > 0 && (
                        <span className="ml-1 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5">
                            {conversation.unreadCount}
                        </span>
                    )}
                </div>
            </div>
        </li>
    );
};
export default ConversationListItem;