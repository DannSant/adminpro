import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import Swal from 'sweetalert2'
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios:Usuario[] = [];
  desde:number=0;
  total:number=0;

  cargando:boolean=true;

  constructor(public _usuarioervice:UsuarioService, public _modalUploadService:ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe((resp)=>this.cargarUsuarios());
  }

  cargarUsuarios(){
    this.cargando=true;
    this._usuarioervice.cargarUsuarios(this.desde).subscribe((resp:any)=>{
      this.cargando=false;
      this.total = resp.records;
      this.usuarios=resp.data;
    });
  }

  cambiarDesde(valor:number){
    let nuevoDesde = this.desde +valor;
    if(nuevoDesde>=this.total){
      return;
    }
    if(nuevoDesde<0){
      return;
    }
    this.desde+=valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino:string){
    
    if(!termino || termino.length<=0){
      this.cargarUsuarios();
      return;
    }
    this.cargando=true;
    this._usuarioervice.buscarUsuario(termino).subscribe((resp:Usuario[])=>{
     
      this.cargando=false;
      this.total = resp.length;
      this.usuarios=resp;
    });
  }

  borrarUsuario(usuario:Usuario){
    if(usuario._id===this._usuarioervice.usuario._id){
      Swal("Usuario invalido", "Imposible borrar el mismo usuario con el que has iniciado sesion","error")
      return;
    }

    Swal({
      title: '¿Estas seguro?',
      text: "Estas a punto de borrar a" + usuario.nombre,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this._usuarioervice.borarUsuario(usuario._id).subscribe((resp)=>{
         
          this.cargarUsuarios();
        });
        
      }
    })
  }

  guardarUsuario(usuario:Usuario){
    this._usuarioervice.actualizarUsuario(usuario).subscribe();
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal("usuarios",id);
  }


}
