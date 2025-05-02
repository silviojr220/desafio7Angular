import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any = {
    name: '',
    senha: ''
  }

  userForms: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  onUserSave(){
    const formValue = this.userForms.value;
    debugger; //pausa a execução do código no navegador, abrindo o painel de debug (se o DevTools estiver aberto)
  }

  mostrarTexto: boolean = false;
} 
