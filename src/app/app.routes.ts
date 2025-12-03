import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';
import { DashboardComponent } from './pages/main/dashboard/dashboard.component';
import { StockandreportComponent } from './pages/main/stockandreport/stockandreport.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent:()=>import('../app/pages/layout/layout/layout.component').then(m=>m.LayoutComponent),
    canActivate:[authGuard],
    children:[
      {path:'',component:DashboardComponent},
      {path:'stock-report/:id',component:StockandreportComponent}
    ]
  }
];
