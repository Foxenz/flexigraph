import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-chart-creator',
  standalone: true,
  imports: [MatInputModule, MatSelectModule],
  templateUrl: './chart-creator.component.html',
  styleUrl: './chart-creator.component.scss',
})
export class ChartCreatorComponent {}
