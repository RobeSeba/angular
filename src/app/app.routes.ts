import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarseComponent } from './components/login/registrarse/registrarse.component';

import { ClientesComponent } from './components/dashboard/clientes/clientes.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { InicioComponent } from './components/dashboard/inicio/inicio.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'',redirectTo:'/login', pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent,children:[
        {path:'',component:InicioComponent},
        {path:'clients', component:ClientesComponent},
        {path:'user',component:UsersComponent},
        {path:'reports',component:ReportsComponent}
    ]},
    {path:'registrarse',component:RegistrarseComponent}
    
];
