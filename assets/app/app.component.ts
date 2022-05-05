import { Component } from '@angular/core'; 
import { Message } from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    nomeNgSwitch: string = "";


    valorNgSwitch: number;

    mostrarElemento: boolean = true;
    onMudaMostrarElemento() {
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[] = [ new Message("Texto da Mensagem", "ViniciusRosalen"),
                            new Message("Texto 2 da Mensagem", "RosalenSilva"),
                            new Message("Texto 3 da Mensagem", "SilvaVinicius")
                        ];

    messageBinding: Message = new Message("Texto da Mensagem", "ViniciusRosalen");
    messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "ViniciusRosalenAlias");
}