export default interface IMessage {
    status: 'error' | 'info' | 'success' | 'warning' | undefined;
    text: string | null | undefined;
}
