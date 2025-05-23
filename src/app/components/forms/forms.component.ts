import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  constructor(private authService: AuthService, private router: Router) { }

  userForms: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  mostrarTexto: boolean = false;

  onUserSave() {
    const { name, password } = this.userForms.value;

    this.authService.login(name, password).subscribe({
      next: (usuario: Usuario) => {
        console.log('Login bem-sucedido:', usuario);
        this.router.navigate(['home'])
        // Armazenar usuário, redirecionar, etc.
      },
      error: (err) => {
        console.error(err.message);
        this.mostrarTexto = true;
      }
    });
  }
}
