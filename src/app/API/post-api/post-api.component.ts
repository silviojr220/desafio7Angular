import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  userList: any[] = [];
  carObj: any = {
    name: '',
    password: '',
  }
  http = inject(HttpClient);

  getUserLogin() {
    this.http.get("http://localhost:4200/login").subscribe((result: any) => {
      this.userList = result.data;
    })
  }
}
