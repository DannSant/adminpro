import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../usuario/usuario.service';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2';
import { Medico } from '../../models/medico.model';

@Injectable()
export class MedicoService {
 

  constructor(public http:HttpClient,public _usuarioService:UsuarioService) {
    
   }

   cargarMedicos(){
     let url = URL_SERVICIOS + "/medic";
     let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
  
    return this.http.get(url,{headers});
   }

   cargarMedico(id:string){
    let url = URL_SERVICIOS + "/medic/" + id;
    let headers = new HttpHeaders({
     'Content-type':'application-json',
     'token':this._usuarioService.token
   })
 
   return this.http.get(url,{headers});
  }

   buscarMedicos(termino:string){
    let url = URL_SERVICIOS + "/search/collection/medico/" + termino;
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
    return this.http.get(url,{headers}).map((resp:any)=>{
      return resp.data.medicos;
    });
  }

  borrarMedico(id:string){
    let url = URL_SERVICIOS + "/medic/"+id;
    let headers = new HttpHeaders({
      'Content-type':'application-json',
      'token':this._usuarioService.token
    })
  
    return this.http.delete(url,{headers}).map((resp:any)=>{       
     
      Swal("Medico borrado", id,"success");
      return true;
    })
  }

  guardarMedico(medico:Medico){  
    let headers = new HttpHeaders({    
      'token':this._usuarioService.token
    });
    let url = URL_SERVICIOS + "/medic";

    if(medico._id){
      url+="/" + medico._id;
      return this.http.put(url,medico,{headers}).map((resp:any)=>{       
     
        Swal("Medico actualizado", medico.nombre,"success");
        return resp;
      });
    }else {
      return this.http.post(url,medico,{headers}).map((resp:any)=>{       
     
        Swal("Medico creado", medico.nombre,"success");
        return resp;
      });
    }

   
  }

}
