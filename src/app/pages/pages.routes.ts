import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {AcountSettingsComponent} from "./acount-settings/acount-settings.component";
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const PAGES_ROUTES:Routes = [
    {
      path:'',
      component:PagesComponent,
      children:[
          {path:'dashboard',component:DashboardComponent, data:{titulo:"Dashboard"}},
          {path:'progress',component:ProgressComponent, data:{titulo:"Progreso"}},
          {path:'graficas1',component:Graficas1Component, data:{titulo:"Graficas"}},
          {path:'promesas',component:PromesasComponent, data:{titulo:"Promesas"}},
          {path:'rxjs',component:RxjsComponent, data:{titulo:"Observables"}},
          {path:'acountSettings',component:AcountSettingsComponent, data:{titulo:"Configuracion de cuenta"}},
          {path:'',redirectTo:'/dashboard',pathMatch:"full"}
      ]
    }
  ];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
