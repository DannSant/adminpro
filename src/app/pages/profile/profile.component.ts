import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  usuario:Usuario;
  imagenSubir:File;
  imagenTemp:string;
  constructor(public _usuarioService:UsuarioService) {
    this.usuario=this._usuarioService.usuario;
   }

  ngOnInit() {
  }

  guardar(usuarioAGuardar:Usuario){
    if(!this.usuario.google){
      this.usuario.email=usuarioAGuardar.email;
    }

    this.usuario.nombre=usuarioAGuardar.nombre;
    

    this._usuarioService.actualizarUsuario(this.usuario).subscribe((resp)=>{

    });

  }

  seleccionImagen(archivo){
    if(!archivo){
      this.imagenSubir=null;
      return;
    }

    if(archivo.type.indexOf("image")<0){
      Swal("Error","Debes elegir una imagen","error");
      this.imagenSubir=null;
      return;
    }

    this.imagenSubir=archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = ()=>{
      //console.log(reader.result);
      this.imagenTemp=reader.result;
    }

  }

  cambiarImagen(){
    this._usuarioService.cambiarImagen(this.imagenSubir,this.usuario._id);
  }

  

}
