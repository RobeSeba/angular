import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login:FormGroup;
  constructor( private form:FormBuilder, private router:Router){
    this.login=form.group({
      correo: ["",[Validators.required,Validators.email]],
      password: ["",Validators.required]
    })
    // router.navigate(['dashboard'])
  }
  validar(){
    console.log(this.login.value);
    const email=this.login.value['correo'];
    const contrasena=this.login.value['password'];
    if(email=="admin@hotmail.com" && contrasena=="admin"){
      this.router.navigate(['dashboard'])
    }else{
      this.router.navigate(['login']);
    }
  }
}
