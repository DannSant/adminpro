import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import 'rxjs/add/operator/map';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable()
export class UsuarioService {

  usuario:Usuario;
  token:string;

  constructor(public http:HttpClient, 
              public router:Router,
              public _subirArchivoService:SubirArchivoService
            ) {
    this.cargarStorage();
   }

   estaLoggeado(){
     return this.token.length>5;
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

   guardarStorage(id:string,token:string,usuario:Usuario){
    localStorage.setItem("id",id);
    localStorage.setItem("token",token);
    localStorage.setItem("usuario",JSON.stringify(usuario));
    this.usuario=usuario;
    this.token=token;
   }

  logout(){
    this.usuario=null;
    this.token="";
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    this.router.navigate(['/login']);
  }

   loginGoogle(token:string){
     console.log(token);
    let url = URL_SERVICIOS+"/login/google";
    return this.http.post(url,{token}).map((resp:any)=>{
      this.guardarStorage(resp.usuario._id,resp.token,resp.usuario);   
      return true;
     });
   }

  login(usuario:Usuario,recordar:boolean){
     if(recordar){
       localStorage.setItem('email',usuario.email);
     }else {
      localStorage.removeItem('email');
     }
     let url = URL_SERVICIOS + "/login";
     return this.http.post(url,usuario).map((resp:any)=>{
      this.guardarStorage(resp.usuario._id,resp.token,resp.usuario);   
      return true;
     });
  }

  

   crearUsuario(usuario:Usuario){
    let url= URL_SERVICIOS +"/user";
    return this.http.post(url,usuario).map((resp:any)=>{
      Swal("Usuario creado", usuario.email,"success")
    });
   }

   actualizarUsuario(usuario:Usuario){
     let url = URL_SERVICIOS+"/user/"+usuario._id;
     url +="?" + this.token;
     return this.http.put(url,usuario).map((resp:any)=>{
       if(usuario._id === this.usuario._id){
        let usuarioDB = resp.usuario
        this.guardarStorage(usuarioDB._id,this.token,usuarioDB);
       }
       
       Swal("Usuario actualizado", usuario.email,"success");
       return true;
     })
   }

   cambiarImagen(file:File,id:string){
    this._subirArchivoService.subirArchivo(file,"usuarios",id)
      .then((resp:any)=>{
        this.usuario.img = resp.usuario.img;
        Swal("Imagen actualizada", this.usuario.nombre,"success");
        this.guardarStorage(id,this.token,this.usuario);
      })
      .catch((error)=>{

      })
   }

   
  cargarUsuarios(desde:number=0){
    let url = URL_SERVICIOS + "/user?desde=" + desde;
    return this.http.get(url);
  }

  buscarUsuario(termino:string){
    let url = URL_SERVICIOS + "/search/coleccion/usuarios/" + termino;
    return this.http.get(url).map((resp:any)=>{
      return resp.usuarios;
    });
  }

  borarUsuario(id:string){
    let url =URL_SERVICIOS + '/user/'+id+"?token=" + this.token;
    return this.http.delete(url).map((resp)=>{
      Swal('Eliminado!','El usuario fue borrado con exito','success');
      return true;
    });
  }

   

}
