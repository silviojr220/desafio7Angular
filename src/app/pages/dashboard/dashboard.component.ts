import { Component, inject } from '@angular/core';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { GetCarListService } from '../../services/get-car-list.service';

@Component({
  selector: 'app-dashboard',
  imports: [SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  serviceVehicles = inject(GetCarListService)
}
