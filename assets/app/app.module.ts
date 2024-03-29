import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component'
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { myrouting } from './app.routing';
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';
import { HttpModule } from '@angular/http';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { ContatoComponent } from './contato/contato.component';
import { ContatoService } from './contato/contato.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ContatoComponent
        
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        myrouting, 
        ReactiveFormsModule, 
        HttpModule, 
        HttpClientModule
    ],
    providers: [UserService, ContatoService],
    bootstrap: [AppComponent]
})
export class AppModule {

}