import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tipo: string="usuario"): any {
    let url = URL_SERVICIOS +'/img' 
    if(!img){
      return url + "/usuarios/XXX";
    }
    if(img.indexOf("https")>=0){
      return img;
    }
    switch(tipo){
      case 'usuario':
        url= url + "/usuarios/" + img;
      break;
      case 'medico':
        url= url + "/medicos/" + img;
      break;
      case 'hospital':
        url= url + "/hospitales/" + img;
      break;
      default:
        console.log("tipo de imagen invalida");
        return url + "/usuarios/XXX";
    }
    return url;
  }

}
