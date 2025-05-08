import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsComponent } from "../../components/forms/forms.component";

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormsComponent],
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
  }

  mostrarTexto: boolean = false;
} 
