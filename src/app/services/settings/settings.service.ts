import { Injectable,Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser'

@Injectable()
export class SettingsService {

  userSettings:Ajustes = {
    temaUrl:"assets/css/colors/default-dark.css",
    tema:"default"
  }



  constructor(@Inject(DOCUMENT) private _document,) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    localStorage.setItem("ajustes",JSON.stringify(this.userSettings));
  }

  cargarAjustes(){
    if (localStorage.getItem("ajustes")){
        this.userSettings = JSON.parse(localStorage.getItem("ajustes"));        
    }
    this.aplicarTema(this.userSettings.tema);

  }

  aplicarTema(tema:string){
    let url = `assets/css/colors/${tema}.css`
    this._document.getElementById("tema").setAttribute("href",url);
    this.userSettings.tema=tema;
    this.userSettings.temaUrl=url;
    this.guardarAjustes();

  }

}

interface Ajustes {
  temaUrl:string;
  tema:string
}
