import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
  oculto:string = '';
  imagenSubir:File;
  imagenTemp:string;
  constructor(public _subirArchivoService:SubirArchivoService, public _modalUploadService:ModalUploadService) { }

  ngOnInit() {
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

  subirImagen(){
    this._subirArchivoService.subirArchivo(this.imagenSubir,this._modalUploadService.tipo,this._modalUploadService.id)
      .then((resp)=>{
        
        this._modalUploadService.notificacion.emit(resp);
        this.cerrarModal();

      })
      .catch((error)=>{
        console.log("error en la carga");
      })
  }
  cerrarModal(){
    this.imagenSubir=null;
    this.imagenTemp=null;
    this._modalUploadService.ocultarModal();
  }

  

}
