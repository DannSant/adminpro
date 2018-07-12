import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2'
import { Hospital } from '../../models/hospital.model';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class HospitalService {
  usuario:Usuario;
  token:string;

  constructor(public http:HttpClient,public _usuarioService:UsuarioService) {
    this.cargarStorage();
   }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem("token");      
      this.usuario = JSON.parse(localStorage.getItem("usuario"));
    }else {
      this.token = "";
      this.usuario=null;
    }
    
  }

  cargarHospitales(){
    let url = URL_SERVICIOS + "/hospital";
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
  
    return this.http.get(url,{headers});
  }

  obtenerHospital(id:string){
    let url = URL_SERVICIOS + "/hospital/"+id;
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
  
    return this.http.get(url,{headers});
  }

  borrarHospital(id:string){
    let url = URL_SERVICIOS + "/hospital/"+id;
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
  
    return this.http.delete(url,{headers}).map((resp:any)=>{       
      
      Swal("Hospital borrado", id,"success");
      return true;
    })
  }

  crearHospital(nombre:string){
    let hospital = {nombre:nombre};
    let headers = new HttpHeaders({    
      'token':this._usuarioService.token
    });
    let url = URL_SERVICIOS + "/hospital";
    return this.http.post(url,hospital,{headers}).map((resp:any)=>{       
     
      Swal("Hospital creado", nombre,"success");
      return true;
    })
  }

  buscarHospitales(termino:string){
    let url = URL_SERVICIOS + "/search/collection/hospital/" + termino;
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
    return this.http.get(url,{headers}).map((resp:any)=>{
      return resp.data.hospitales;
    });
  }

  actualizarHospital(hospital:Hospital){
     
    let url = URL_SERVICIOS+"/hospital/"+hospital._id;
    let headers = new HttpHeaders({
     'token':this._usuarioService.token
   })
    return this.http.put(url,hospital,{headers}).map((resp:any)=>{       
      
      Swal("Hospital actualizado", hospital.nombre,"success");
      return true;
    })
  }

}
