import { NgModule } from '@angular/core';

import {DashboardComponent} from './dashboard/dashboard.component'
import {Graficas1Component} from './graficas1/graficas1.component'
import {ProgressComponent} from './progress/progress.component'
import { PagesComponent } from './pages.component';

import {SharedModule} from '../shared/shared.module'
import {PAGES_ROUTING} from './pages.routes'

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTING
  ],
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent
  ],
  providers: []
})
export class PagesModule { }
