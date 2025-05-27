import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarseComponent } from './components/login/registrarse/registrarse.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'registrarse',component:RegistrarseComponent}
];
