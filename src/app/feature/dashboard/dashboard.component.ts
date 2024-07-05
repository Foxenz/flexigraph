import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { ChartCreatorComponent } from './components/chart-creator/chart-creator.component';
import { ChartZoneComponent } from './components/chart-zone/chart-zone.component';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

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
    CdkDrag,
    CdkDragHandle,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  opened: boolean = true;
}
