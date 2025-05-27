import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  imports: [MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent implements OnInit {
registro:FormGroup;
usuarios:any[]=[];
constructor( private formBuilder:FormBuilder, private router: Router){
  this.registro=this.formBuilder.group({
    nombre:['',Validators.required],
    apellido:['',Validators.required],
    correo:['',[Validators.required,Validators.email]],
    contraseña:['',Validators.required]
  })
  }
  ngOnInit(): void {
    this.cargarUsuarios();
  }
  Registrar() {
    if (this.registro.valid) {
      this.usuarios.push(this.registro.value);
      this.guardarUsuarios(); // Guarda el array actualizado en localStorage
      this.registro.reset();
      window.alert('registro exitoso');
      this.router.navigate(['/login']);
    } else {
      console.log('Formulario inválido. No se pudo registrar el usuario.');
    }
  }

  cargarUsuarios() {
    const usuariosGuardados = localStorage.getItem('usuarios');
    if (usuariosGuardados) {
      this.usuarios = JSON.parse(usuariosGuardados);
    }
  }

  guardarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));
  }
}

