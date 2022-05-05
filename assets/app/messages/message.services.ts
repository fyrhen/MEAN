import { Message } from "./message.model";

export class MessageService {
    private messageSService: Message[] = [];

    addMessage(message: Message) {
        this.messageSService.push(message);
    }
    
    getMessages() {
        return this.messageSService;
    }
    
    deleteMessage(message: Message) {
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }
}