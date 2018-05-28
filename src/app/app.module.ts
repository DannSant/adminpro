import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//modulos
import {PagesModule} from './pages/pages.module';
import {FormsModule} from '@angular/forms'
import { ChartsModule } from 'ng2-charts';

//COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//RUTAS
import {APP_ROUTING} from './app.routes';

//import { IncrementadorComponent } from './components/incrementador/incrementador.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    PagesModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
