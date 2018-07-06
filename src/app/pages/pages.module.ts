import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import {DashboardComponent} from './dashboard/dashboard.component'
import {Graficas1Component} from './graficas1/graficas1.component'
import {ProgressComponent} from './progress/progress.component'
import { PagesComponent } from './pages.component';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component'
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

import {SharedModule} from '../shared/shared.module'
import {PAGES_ROUTING} from './pages.routes'

import { ChartsModule } from 'ng2-charts';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

//Pipes
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    PAGES_ROUTING,
    FormsModule,
    ChartsModule,
    PipesModule
  ],
  declarations: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    AcountSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  providers: []
})
export class PagesModule { }
