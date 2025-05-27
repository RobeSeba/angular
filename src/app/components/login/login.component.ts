import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
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
  validar() {
    if (this.login.valid) {
      const correo = this.login.value['correo'];
      const password = this.login.value['password'];

      // **NUEVO CÓDIGO: Cargar usuarios del localStorage para validar**
      const usuariosGuardados = localStorage.getItem('usuarios');

      if (usuariosGuardados) {
        try { // Agregamos try-catch por si los datos en localStorage no son JSON válido
          const usuariosRegistrados = JSON.parse(usuariosGuardados);

          // Buscar si existe un usuario con el correo y contraseña ingresados
          const usuarioEncontrado = usuariosRegistrados.find((usuario: any) =>
            usuario.correo === correo && usuario.contraseña === password
          );

          if (usuarioEncontrado) {
            console.log('Inicio de sesión exitoso:', usuarioEncontrado);
            this.router.navigate(['dashboard']);
          } else {
            console.log('Credenciales inválidas');
           
          }
        } catch (e) {
          console.error("Error al parsear JSON de usuarios desde localStorage:", e);

        }
      } else {
        console.log('No hay usuarios registrados en localStorage.');
 
      }
    } else {
      console.log('Formulario de login inválido.');
 
    }
  }
}
