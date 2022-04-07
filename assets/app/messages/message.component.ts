import { Input, Output } from "@angular/core";
import { Component } from "@angular/core";
import { EventEmitter } from "events";
import { Message } from './message.model';

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

    @Input() messageVarClasse : Message = new Message ("","");
    @Input('InputMessage') messageVarClasseAlias : Message = new Message ("","");

}