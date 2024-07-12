import { Routes } from '@angular/router';
import { ChartManager } from './shared/managers/chart.manager';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'dashboard',
    providers: [ChartManager],
    loadComponent: () =>
      import('./feature/dashboard/dashboard.component').then(
        m => m.DashboardComponent
      ),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import('./shared/components/not-found/not-found.component').then(
        m => m.NotFoundComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
