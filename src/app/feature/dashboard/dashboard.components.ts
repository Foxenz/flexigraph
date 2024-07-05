import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { ChartCreatorComponent } from './components/chart-creator/chart-creator.component';
import { ChartZoneComponent } from './components/chart-zone/chart-zone.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatIcon,
    ChartCreatorComponent,
    ChartZoneComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.components.scss',
})
export class DashboardComponent {
  events: string[] = [];
  opened: boolean;

  constructor() {
    this.opened = true;
  }
}
