import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {

  formLogin: FormGroup = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('',[Validators.required, Validators.minLength(4)])
  });

  constructor() {
    const valid = this.formLogin.valid;
  }

  userSave () {
    const formValue = this.formLogin.value;
    debugger;
  }

  onSubmit() {
    console.log(this.formLogin.value);
  }
}
