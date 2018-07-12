import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico/medico.service';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: []
})
export class MedicosComponent implements OnInit {
   medicos:Medico[]=[];
   total:number = 0;
   cargando:boolean=false;
  constructor(public _medicoService:MedicoService) { }

  ngOnInit() {
    this.cargarMedicos();
  }

  cargarMedicos(){
    this.cargando=true;
    this._medicoService.cargarMedicos().subscribe((resp:any)=>{
     
      this.cargando=false;
      this.total = resp.records;
      this.medicos=resp.data;
    })
  }

  buscarMedico(termino:string){
    if(!termino || termino.length<=0){
      this.cargarMedicos();
      return;
    }
    this.cargando=true;
    this._medicoService.buscarMedicos(termino).subscribe((resp:any)=>{
     
      this.cargando=false;
      this.total = resp.length;
      this.medicos=resp;
    })
  }

  borrarMedico(medico:Medico){
    
    this._medicoService.borrarMedico(medico._id).subscribe((resp)=>{
      this.cargarMedicos();
    })
  }

}
