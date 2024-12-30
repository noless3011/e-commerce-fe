'use client';

import { Conversation } from '@/app/types/Conversation';
import { Message } from '@/app/types/Message';
import { User } from '@/app/types/User';
import React, { useState, useEffect, useRef } from 'react';
import MessageArea from './MessageArea';
import ConversationList from './ConversationList';

import { mockConversations, mockUser1, mockUser2 } from './MockData';

const MessagingPanel: React.FC = () => {
    const [conversations, setConversations] = useState<Conversation[]>(mockConversations);
    const [selectedConversationId, setSelectedConversationId] = useState<number | null>(mockConversations[0]?.id || null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const selectedConversation = conversations.find((conv) => conv.id === selectedConversationId);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [selectedConversation?.messages]);

    const handleSendMessage = async (messageContent: string) => {
        if (selectedConversationId && messageContent.trim()) {
            // const newMessageObject: Message = {
            //     id: `msg-${Date.now()}`,
            //     senderId: mockUser1.id,
            //     content: messageContent.trim(),
            //     timestamp: new Date(),
            // };

            // setConversations((prevConversations) =>
            //     prevConversations.map((conv) =>
            //         conv.id === selectedConversationId
            //             ? { ...conv, messages: [...conv.messages, newMessageObject], lastMessage: newMessageObject }
            //             : conv
            //     )
            // );

            // Simulate receiving a reply after a short delay (for demo purposes)
            // setTimeout(() => {
            //     const replyMessage: Message = {
            //         id: `msg-reply-${Date.now()}`,
            //         senderId: mockUser2.id,
            //         content: `Thanks for your message! We'll get back to you soon regarding "${messageContent.trim()}".`,
            //         timestamp: new Date(),
            //     };
            //     setConversations((prevConversations) =>
            //         prevConversations.map((conv) =>
            //             conv.id === selectedConversationId
            //                 ? { ...conv, messages: [...conv.messages, replyMessage], lastMessage: replyMessage }
            //                 : conv
            //         )
            //     );
            // }, 1000);
            try {
                // Example of calling an API
                // const callGetChatFunc = await ChatApi.chatControllerGet(Number(mockOtherUser.id));
                // const res = await callGetChatFunc();
                // console.log(res);
            } catch (error) {
                console.log("error", error);
            }
        }
    };

    const handleSelectConversation = (conversationId: number) => {
        setSelectedConversationId(conversationId);
        // Mark messages as read (optional)
        setConversations((prevConversations) =>
            prevConversations.map((conv) =>
                conv.id === conversationId ? { ...conv, unreadCount: 0 } : conv
            )
        );
    };

    return (
        <div className="flex h-full w-full">
            {/* Conversation List */}
            <div className="w-2/5 border-r border-gray-200">
                <ConversationList
                    conversations={conversations}
                    selectedConversationId={selectedConversationId}
                    onSelectConversation={handleSelectConversation}
                    loggedInUserId={mockUser1.id}
                />
            </div>

            {/* Message Area */}
            <MessageArea
                conversation={selectedConversation}
                loggedInUserId={mockUser1.id}
                onSendMessage={handleSendMessage}
            />
        </div>
    );
};

export default MessagingPanel;