import { Conversation } from "@/app/types/Conversation";
import ConversationListItem from "./ConversationListItem";


interface ConversationListProps {
    conversations: Conversation[];
    selectedConversationId: string | null;
    onSelectConversation: (conversationId: string) => void;
    loggedInUserId: string;
}

const ConversationList: React.FC<ConversationListProps> = ({
    conversations,
    selectedConversationId,
    onSelectConversation,
    loggedInUserId,
}) => {
    return (
        <div className="w-full border-b border-gray-200 overflow-y-auto">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Messages</h2>
            </div>
            <ul>
                {conversations.map((conversation) => (
                    <ConversationListItem
                        key={conversation.id}
                        conversation={conversation}
                        isSelected={selectedConversationId === conversation.id}
                        onSelect={onSelectConversation}
                        loggedInUserId={loggedInUserId}
                    />
                ))}
            </ul>
        </div>
    );
};
export default ConversationList;