import { Message } from "./Message";
import { User } from "./User";

export interface Conversation {
    id: number;
    participants: User[];
    messages: Message[];
    lastMessage?: Message;
    unreadCount?: number;
}
