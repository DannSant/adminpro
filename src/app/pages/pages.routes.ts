import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {PagesComponent} from './pages.component';
import {AcountSettingsComponent} from "./acount-settings/acount-settings.component";
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';
import { LoginGuardGuard, AdminGuard, VerificaTokenGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HospitalesComponent } from './hospitales/hospitales.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico.component';
import { BusquedaComponent } from './busqueda/busqueda.component';

const PAGES_ROUTES:Routes = [    
    {
      path:'dashboard',
      component:DashboardComponent, 
      data:{titulo:"Dashboard"},
      canActivate:[VerificaTokenGuard]
    },
    {path:'progress',component:ProgressComponent, data:{titulo:"Progreso"}},
    {path:'graficas1',component:Graficas1Component, data:{titulo:"Graficas"}},
    {path:'promesas',component:PromesasComponent, data:{titulo:"Promesas"}},
    {path:'rxjs',component:RxjsComponent, data:{titulo:"Observables"}},
    {path:'acountSettings',component:AcountSettingsComponent, data:{titulo:"Configuracion de cuenta"}},
    {path:'perfil',component:ProfileComponent, data:{titulo:"Perfil de Usuario"}},
    {path:'busqueda/:termino',component:BusquedaComponent, data:{titulo:"Buscador"}},
    //Mantenimientos
    {
      path:'usuarios',
      component:UsuariosComponent, 
      canActivate:[AdminGuard],
      data:{titulo:"Mantenimiento de Usuarios"}
    },
    {path:'hospitales',component:HospitalesComponent, data:{titulo:"Mantenimiento de Hospitales"}},
    {path:'medicos',component:MedicosComponent, data:{titulo:"Mantenimiento de Medicos"}},
    {path:'medico/:id',component:MedicoComponent, data:{titulo:"Actualizar Medico"}},
    {path:'',redirectTo:'/dashboard',pathMatch:"full"}
      
  ];

export const PAGES_ROUTING = RouterModule.forChild(PAGES_ROUTES);
