import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./landing/landing.component').then(m => m.LandingComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./feature/dashboard/dashboard.component').then(
        m => m.DashboardComponent
      ),
  },
  {
    path: 'data-management',
    loadComponent: () =>
      import('./feature/data-management/data-management.component').then(
        m => m.DataManagementComponent
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
