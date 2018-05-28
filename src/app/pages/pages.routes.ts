import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';

const PAGES_ROUTES:Routes = [
    {
      path:'',
      component:PagesComponent,
      children:[
          {path:'dashboard',component:DashboardComponent},
          {path:'progress',component:ProgressComponent},
          {path:'graficas1',component:Graficas1Component},
          {path:'',redirectTo:'/dashboard',pathMatch:"full"}
      ]
    }
  ];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
