export default interface IChat {
    senderId: string;
    receiverId: string;
    text: string;
    read: boolean;
    chatId?: string;
}
