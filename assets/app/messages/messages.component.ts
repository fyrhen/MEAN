import { Input, Output } from "@angular/core";
import { Component, EventEmitter } from "@angular/core";
import { Message } from './message.model';

@Component({
    selector: 'app-messages',
    template: `
    <div class="row">
        <strong class="col-md-8 col-md-offset-2">== Após Reestruturação ==</strong>
        <app-message-input></app-message-input>
    </div>
    <hr/>
    <div class="row">
        <app-message-input></app-message-input>
        <strong class="col-md-8 col-md-offset-2">== Após Reestruturação ==</strong>  
    </div>
    `
})

export class MessagesComponent {
    
}