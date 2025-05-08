import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, RouterLink, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}