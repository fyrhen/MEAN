import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin-component.html'
})

export class SigninComponent implements OnInit {
    
    loginForm : FormGroup = new FormGroup({
        email: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
        ]),
        password:new FormControl(null, Validators.required)
    });
    constructor(private _router: Router) {}

    ngOnInit() {
    
    }

    login() {
        if(!this.loginForm.valid) {
            console.log('Login Inválido'); return;
        }
        console.log(JSON.stringify(this.loginForm.value));
    }
}