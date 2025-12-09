import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { StockandreportComponent } from './pages/main/stockandreport/stockandreport.component';
import { AnalyticsComponent } from './pages/main/analytics/analytics.component';
import { UserListComponent } from './pages/main/user-list/user-list.component';
import { MessagesComponent } from './pages/main/messages/messages.component';
import { SettingsComponent } from './pages/main/settings/settings.component';
import { InwardOutwardComponent } from './pages/main/inward-outward/inward-outward.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login page
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },

  {
    path: 'layout',
    canActivate: [authGuard],
    loadComponent: () =>
      import('../app/pages/layout/layout/layout.component').then(
        (m) => m.LayoutComponent
      ),
    children: [
      { path: '', component: DashboardComponent },

      { path: 'stock-report/:id', component: StockandreportComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'user-lists', component: UserListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'invard-outward', component: InwardOutwardComponent },
      {
        path: 'invard-entry',
        loadComponent: () =>
          import('./pages/main/invard-entry/invard-entry.component'),
      },
      // {path:'invard-entry',component:InvardEntryComponent}
      {
        path: 'products',
        loadComponent: () =>
          import('./pages/main/demo/product/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      { path: '**', redirectTo: '/login' },
    ],
  },
];
