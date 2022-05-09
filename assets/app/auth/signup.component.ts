import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../user.service";

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html'
})

export class SignupComponent implements OnInit {
    
    myForm:FormGroup = new FormGroup({
        firstNameTS: new FormControl(null, Validators.required),
        lastNameTS: new FormControl(null, Validators.required),
        emailTS: new FormControl(null, [
            Validators.required,
            Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
        ]),
        passwordTS: new FormControl(null, Validators.required)
    })

    constructor(private _router:Router, private _userService:UserService) {}

    ngOnInit() {
    }

    register() {
        if(!this.myForm.valid) {
            console.log('Formulário Invalido'); return;
        }

        this._userService.register(JSON.stringify(this.myForm.value))
        // .subscribe(
        //     data=> {console.log(data); this._router.navigate(['/autenticacao/signin']);},
        //     error=> console.error(error)
            
        // )
        // console.log(JSON.stringify(this.myForm.value));
    }
}