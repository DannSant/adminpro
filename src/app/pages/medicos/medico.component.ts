import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicoService, HospitalService } from '../../services/service.index';
import { Hospital } from '../../models/hospital.model';
import { Medico } from '../../models/medico.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent implements OnInit {

  hospitales:Hospital[] = [];
  medico:Medico = new Medico('','','','','');
  hospital:Hospital = new Hospital("");

  constructor(public _medicoService:MedicoService,
              public _hospitalService:HospitalService,
              public router:Router,
              public activatedRoute:ActivatedRoute,
              public _modalUploadService:ModalUploadService
    ) {
      activatedRoute.params.subscribe((parametros)=>{
        let id=parametros['id'];
        if(id!='nuevo'){
          this.cargarMedico(id);
        }
      })

  }

  ngOnInit() {
    this._hospitalService.cargarHospitales().subscribe((resp:any)=>{
      this.hospitales=resp.data;
    });
    this._modalUploadService.notificacion.subscribe((resp:any)=>{
      this.medico.img = resp.medico.img
    });
  }

  guardarMexico(f:NgForm){
    if(f.invalid){
      return;
    }

    this._medicoService.guardarMedico(this.medico).subscribe((resp)=>{
     
        let id = resp.data._id;
        this.medico=resp.data;        
        this.router.navigate(['/medico',id]);
    });
  }

  cambioHospital(id:string){
    this._hospitalService.obtenerHospital(id).subscribe((resp:any)=>{
     
      this.hospital=resp.hospital;
    })
  }

  cargarMedico(id:string){
    this._medicoService.cargarMedico(id).subscribe((resp:any)=>{
     
      this.medico=resp.data;
      this.medico.hospital = resp.data.hospital._id;
      this.cambioHospital(this.medico.hospital);
    })
  }

  cambiarFoto(){
    this._modalUploadService.mostrarModal('medicos',this.medico._id);
  }

}
