import { Component } from '@angular/core'; 
import { NgForm } from "@angular/forms"
import { MessageService } from './message.services';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // providers: [MessageService]
})

export class MessageInputComponent {
    constructor (private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        const messageAux = new Message(form.value.myContentngForm, 'Vini');
        this.messageService.addMessage(messageAux);
        console.log(form);
        form.resetForm();
    }
}