import { Conversation } from "@/app/types/Conversation";
import MessageHeader from "./MessageHeader";
import MessageInput from "./MessageInput";
import MessageList from "./MessageList";

interface MessageAreaProps {
    conversation: Conversation | undefined;
    loggedInUserId: string;
    onSendMessage: (messageContent: string) => void;
}

const MessageArea: React.FC<MessageAreaProps> = ({ conversation, loggedInUserId, onSendMessage }) => {
    return (
        <div className="flex-1 flex flex-col h-full">
            {conversation ? (
                <>
                    <MessageHeader participant={conversation.participants.find(user => user.id !== loggedInUserId)} />
                    <MessageList messages={conversation.messages} loggedInUserId={loggedInUserId} />
                    <MessageInput onSendMessage={onSendMessage} />
                </>
            ) : (
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-gray-500">Select a conversation to view messages.</p>
                </div>
            )}
        </div>
    );
};
export default MessageArea;