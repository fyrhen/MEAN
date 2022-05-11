import { Component } from '@angular/core'; 
import { NgForm } from "@angular/forms"
import { MessageService } from './message.services';
import { Message } from './message.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    // providers: [MessageService]
})

export class MessageInputComponent {
    constructor (public messageService: MessageService, public route: ActivatedRoute) {}



    onSubmit(form: NgForm) {
        const messageAux = new Message(form.value.myContentngForm, 'Vini');
        this.messageService.addMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
        console.log(form);
        form.resetForm();
    }
}