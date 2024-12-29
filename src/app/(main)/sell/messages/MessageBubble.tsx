import { Message } from "@/app/types/Message";

interface MessageBubbleProps {
    message: Message;
    isOwnMessage: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isOwnMessage }) => {
    return (
        <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-xs rounded-lg p-2 ${isOwnMessage ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}
            >
                {message.content}
                <div className="text-xs text-gray-500 mt-1">
                    {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
            </div>
        </div>
    );
};
export default MessageBubble;