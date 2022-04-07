export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.messageId = messageId;
        this.content = content;
        this.userId = userId;
        this.username = username;
    }
}