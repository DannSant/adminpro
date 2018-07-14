//modulos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module'
import {PAGES_ROUTING} from './pages.routes'
import { ChartsModule } from 'ng2-charts';

//componentes
import {DashboardComponent} from './dashboard/dashboard.component'
import {Graficas1Component} from './graficas1/graficas1.component'
import {ProgressComponent} from './progress/progress.component'
import { PagesComponent } from './pages.component';
import {IncrementadorComponent} from '../components/incrementador/incrementador.component'
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';


//Pipes
import { PipesModule } from '../pipes/pipes.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';




@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    PAGES_ROUTING,
    FormsModule,
    ChartsModule,
    PipesModule,
    CommonModule
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
    UsuariosComponent,
    ModalUploadComponent,
    HospitalesComponent,
    MedicosComponent,
    MedicoComponent,
    BusquedaComponent
  ],
  exports: [
    DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent,
    ModalUploadComponent
  ],
  providers: []
})
export class PagesModule { }
