import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-chart-creator',
  standalone: true,
  imports: [MatInputModule, MatSelectModule],
  templateUrl: './chart-form.component.html',
  styleUrl: './chart-form.component.scss',
})
export class ChartFormComponent {}
