import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser'
import {SettingsService} from '../../services/service.index'
@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styles: []
})
export class AcountSettingsComponent implements OnInit {

  constructor(
              public _settingsService:SettingsService
              ) { }

  ngOnInit() {

    this.colocarCheck();
  }

  cambiarColor(tema:string,link:any){
    //console.log(link);
    this.aplicarCheck(link);

    this._settingsService.aplicarTema(tema);
  }

  aplicarCheck(link:any){
    let selectores:any = document.getElementsByClassName("selector");
    for (let ref of selectores){
      ref.classList.remove("working");
    }
    link.classList.add("working");
  }

  colocarCheck(){
    let selectores:any = document.getElementsByClassName("selector");
    let tema = this._settingsService.userSettings.tema;
    for (let ref of selectores){
      if(ref.getAttribute("data-theme")==tema){
        ref.classList.add("working");
        break;
      }
    }
  }

}
