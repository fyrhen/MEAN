import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routers";
import { ContatoComponent } from "./contato/contato.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessagesComponent },
    { path: 'mensagens/:id', component: MessagesComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);