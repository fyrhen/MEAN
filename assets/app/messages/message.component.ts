import { Input, Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";
import { Message } from './message.model';
import { MessageService } from "./message.services";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]
})
export class MessageComponent {

    color = '#337ab7';
    tam = 12;
    postsService: any;

    onMudaStyle() {
        this.color = 'red';
        this.tam = 16;
    }

    @Input() messageVarClasse : Message = new Message("","");
    @Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    constructor(public messageServiceObj: MessageService) {}

    onDelete(postId: string) {
        postId = this.messageVarClasse.messageId;
        this.messageServiceObj.deleteMessage(this.messageVarClasse, postId);
    }

    onEdit() {
        this.editClicked_MessageMetodoClasse.emit("Texto");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message (child) para o app (pai) - Alias");
    }
}