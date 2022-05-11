import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Message } from "./message.model";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];
    
    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }
    
    getMessages() {
        // return this.messageSService;
        return this.http.get('http://localhost:3000/message')
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const messageSResponseRecebida = responseEmJSON.objSMessageSRecuperadoS;
                let transfomedCastMessagesModelFrontend: Message[] = [];
                    for(let msg of messageSResponseRecebida) {
                        transfomedCastMessagesModelFrontend.push(
                            new Message(msg.content, 'Vinicius', msg._id, null));
                    }
                this.messageSService = transfomedCastMessagesModelFrontend;
                return transfomedCastMessagesModelFrontend;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }
    
    deleteMessage(message: Message, postId: string) {
        this.http.delete("http://localhost:3000/mensagens/"+postId)
        .subscribe(()=> {
            console.log("Deleted");
        });
        this.messageSService.splice(this.messageSService.indexOf(message), 1);
    }

    updateMessage() {
        
    }
}