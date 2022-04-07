import { Component } from '@angular/core'; 
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    messageBinding: Message = new Message("Texto da Mensagem", "ViniciusRosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "ViniciusRosalenAlias");
}