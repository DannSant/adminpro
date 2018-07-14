import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital.model';
import Swal from 'sweetalert2'
import { HospitalService } from '../../services/hospital/hospital.service';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: []
})
export class HospitalesComponent implements OnInit {
  hospitales:Hospital[]=[];
  total:number = 0;
  cargando:boolean=false;
  constructor(public _hospitalService:HospitalService, public _modalUploadService:ModalUploadService) { }

  ngOnInit() {
    this.cargarHospitales();
    this._modalUploadService.notificacion.subscribe((resp)=>this.cargarHospitales());
  }

  cargarHospitales(){
    this.cargando=true;
    this._hospitalService.cargarHospitales().subscribe((resp:any)=>{      
      this.cargando=false;
      this.total = resp.records;
      this.hospitales=resp.data;
    });
  }

  buscarHospital(termino:string){
    
    if(!termino || termino.length<=0){
      this.cargarHospitales();
      return;
    }
    this.cargando=true;
    this._hospitalService.buscarHospitales(termino).subscribe((resp:Hospital[])=>{
     
      this.cargando=false;
      this.total = resp.length;
      this.hospitales=resp;
    });
  }

  mostrarDialogoNuevoHospital(){
    Swal({
      title: 'Ingresa el nombre del hospital',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Crear',
      showLoaderOnConfirm: true,
      preConfirm: (hospitalName:string) => {
        if(hospitalName.length>0){
          this._hospitalService.crearHospital(hospitalName).subscribe((resp)=>{
            //console.log(resp);
            this.cargarHospitales();
          })
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal("hospitales",id);
  }
  guardarHospital(hospital:Hospital){
    this._hospitalService.actualizarHospital(hospital).subscribe();
  }

  borrarHospital(hospital:Hospital){
    this._hospitalService.borrarHospital(hospital._id).subscribe((resp)=>{     
      this.cargarHospitales();
    })
  }

}
