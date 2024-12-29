import { Message } from "./Message";
import { User } from "./User";

export interface Conversation {
    id: string;
    participants: User[];
    messages: Message[];
    lastMessage?: Message;
    unreadCount?: number;
}
