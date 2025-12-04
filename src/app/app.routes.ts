import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { StockandreportComponent } from './pages/main/stockandreport/stockandreport.component';
import { AnalyticsComponent } from './pages/main/analytics/analytics.component';
import { UserListComponent } from './pages/main/user-list/user-list.component';
import { MessagesComponent } from './pages/main/messages/messages.component';
import { SettingsComponent } from './pages/main/settings/settings.component';
import { InwardOutwardComponent } from './pages/main/inward-outward/inward-outward.component';
import { InvardEntryComponent } from './pages/main/invard-entry/invard-entry.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import('../app/pages/layout/layout/layout.component').then(m=>m.LayoutComponent),
    canActivate:[authGuard],
    children:[
      {path:'',component:DashboardComponent},
      {path:'stock-report/:id',component:StockandreportComponent},
      {path:'analytics',component:AnalyticsComponent},
      {path:'user-lists',component:UserListComponent},
      {path:'messages',component:MessagesComponent},
      {path:'settings',component:SettingsComponent},
      {path:'invard-outward',component:InwardOutwardComponent},
      {path:'invard-entry',component:InvardEntryComponent},
    ]
  }
];
