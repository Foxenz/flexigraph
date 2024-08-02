import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ChartZoneComponent } from './components/chart-zone/chart-zone.component';
import { ChartListComponent } from './components/chart-list/chart-list.component';
import { ChartManager } from '../../shared/managers/chart.manager';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { DialogFormChartComponent } from './components/dialogs/dialog-chart/dialog-form-chart.component';
import { filter } from 'rxjs';
import { ChartCardModel } from './models/chart-model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    ChartZoneComponent,
    ChartListComponent,
    RouterLink,
    NavbarComponent,
  ],
  providers: [ChartManager],
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  private readonly _mobileQueryListener: () => void;
  readonly dialog = inject(MatDialog);

  constructor(
    public chartManager: ChartManager,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormChartComponent);

    dialogRef
      .afterClosed()
      .pipe(filter(element => element != undefined))
      .subscribe(result => this.createChart(result));
  }

  createChart(chart: ChartCardModel) {
    this.chartManager.createChart(chart);
  }
}
