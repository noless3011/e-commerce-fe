import { Conversation } from "@/app/types/Conversation";
import { Message } from "@/app/types/Message";
import { User } from "@/app/types/User";

// Mock Users
export const mockUser1: User = {
    id: 'user-1',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    username: 'john.doe',
    avatar: '/avatars/john.jpg',
    birthDay: 19900515,
    gender: true,
    name: 'John Doe',
    address: '123 Main St',
};

export const mockUser2: User = {
    id: 'user-2',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    username: 'jane.smith',
    avatar: '/avatars/jane.png',
    birthDay: 19921020,
    gender: false,
    name: 'Jane Smith',
    address: '456 Oak Ave',
};

export const mockUser3: User = {
    id: 'user-3',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    username: 'peter.jones',
    avatar: '/avatars/peter.png',
    birthDay: 19880301,
    gender: true,
    name: 'Peter Jones',
    address: '789 Pine Ln',
};

// Mock Messages
const mockMessage1: Message = {
    id: 'msg-1',
    senderId: 'user-1',
    content: 'Hey Jane, how are you?',
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
};

const mockMessage2: Message = {
    id: 'msg-2',
    senderId: 'user-2',
    content: 'Hi John, I\'m doing well, thanks! How about you?',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
};

const mockMessage3: Message = {
    id: 'msg-3',
    senderId: 'user-1',
    content: 'I\'m good too. Just wanted to check in.',
    timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
};

const mockMessage4: Message = {
    id: 'msg-4',
    senderId: 'user-3',
    content: 'Anyone seen the latest news?',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
};

const mockMessage5: Message = {
    id: 'msg-5',
    senderId: 'user-2',
    content: 'Not yet, what\'s up?',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
};

// Mock Conversations
export const mockConversations: Conversation[] = [
    {
        id: 'conv-1',
        participants: [mockUser1, mockUser2],
        messages: [mockMessage1, mockMessage2, mockMessage3],
        lastMessage: mockMessage3,
        unreadCount: 0,
    },
    {
        id: 'conv-2',
        participants: [mockUser2, mockUser3],
        messages: [mockMessage4, mockMessage5],
        lastMessage: mockMessage5,
        unreadCount: 1,
    },
    {
        id: 'conv-3',
        participants: [mockUser1, mockUser3],
        messages: [],
        lastMessage: undefined,
        unreadCount: 0,
    },
];