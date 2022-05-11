import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ContatoService } from "./contato.service";

@Component({
    selector: 'app-contato',
    templateUrl: './contato-component.html'
})

export class ContatoComponent implements OnInit {

    public isChecked = true;
    public formaContato = 'WhatsApp';
    public horarioContato = 'Manhã';

    contatoForm:FormGroup = new FormGroup({
        nome: new FormControl(null, Validators.required),
        email: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
        ]),
        telefone: new FormControl(null, Validators.required),
        mensagem: new FormControl(null, Validators.required),
        contato: new FormControl(null, Validators.required),
        horario: new FormControl(null, Validators.required),
        checkbox: new FormControl(null, Validators.required)
    })

    constructor(private _router:Router, private _contatoService :ContatoService) {}

    ngOnInit() {
    }

    register() {
        this._contatoService.register(JSON.stringify(this.contatoForm.value))
        .subscribe(
            data=> {console.log(data)},
            error=> console.error(error)
        )
    }
}