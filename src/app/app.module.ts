import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos
//import {PagesModule} from './pages/pages.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { ChartsModule } from 'ng2-charts';
import {RouterModule} from '@angular/router'
import { SharedModule } from './shared/shared.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';

//RUTAS
import {APP_ROUTING} from './app.routes';
import { ServiceModule } from './services/service.module';




//import { IncrementadorComponent } from './components/incrementador/incrementador.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PagesComponent
    


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    //PagesModule,
    FormsModule,
    ChartsModule,
    ServiceModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
