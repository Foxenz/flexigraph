import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ChartManager } from '../../shared/managers/chart.manager';

@Component({
  selector: 'app-data-management',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './data-management.component.html',
  styleUrl: './data-management.component.scss',
  providers: [ChartManager],
})
export class DataManagementComponent {
  constructor(public chartManager: ChartManager) {}
}
