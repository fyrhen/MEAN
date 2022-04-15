import { Component } from '@angular/core'; 
import { Message } from './message.model';

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message [messageVarClasse]="msg"
                (editClicked_MessageMetodoClasse)="msg.content = $event"
                *ngFor="let msg of messageS">
            </app-message>
        </div>
    `
})
export class MessageListComponent {
    messageS: Message[] = [ new Message("Texto da Mensagem-LIST-Comp", "ViniciusRosalen-LIST-Comp"),
                            new Message("Texto 2 da Mensagem-LIST-Comp", "RosalenSilva-LIST-Comp"),
                            new Message("Texto 3 da Mensagem-LIST-Comp", "SilvaVinicius-LIST-Comp")
                        ];
}