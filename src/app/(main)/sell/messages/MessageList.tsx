"use client";
import { useRef, useEffect } from "react";
import MessageBubble from "./MessageBubble";
import { Message } from "@/app/types/Message";

interface MessageListProps {
    messages: Message[];
    loggedInUserId: number;
}

const MessageList: React.FC<MessageListProps> = ({ messages, loggedInUserId }) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
                <MessageBubble key={message.id} message={message} isOwnMessage={message.senderId === loggedInUserId} />
            ))}
            <div ref={messagesEndRef} /> {/* Scroll to this element */}
        </div>
    );
};
export default MessageList;
