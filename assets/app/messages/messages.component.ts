import { Input, Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";
import { Message } from './message.model';

@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
        <app-message-input></app-message-input>
    </div>
    <hr/>
    `
})

export class MessagesComponent {
    
}