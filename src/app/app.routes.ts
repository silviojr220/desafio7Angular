import { Routes } from '@angular/router';
import { LoginComponent } from './folders/login/login.component';
import { HomeComponent } from './folders/home/home.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'home',
        component: HomeComponent
    },

    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/login',
    },
];
