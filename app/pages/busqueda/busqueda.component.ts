import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { UsuarioService } from '../../services/service.index';
import { Usuario } from '../../models/usuario.model';
import { Medico } from '../../models/medico.model';
import { Hospital } from '../../models/hospital.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  usuarios:Usuario[]=[];
  medicos:Medico[]=[];
  hospitales:Hospital[]=[];

  constructor(
    public activatedRoute:ActivatedRoute,
    public http:HttpClient,
    public _usuarioService:UsuarioService
  ) { 
    this.activatedRoute.params.subscribe((params)=>{
      let termino=params['termino'];
      this.buscar(termino);
    })
  }

  ngOnInit() {
  }

  buscar(termino:string){
    let url = URL_SERVICIOS + '/search/all/' + termino;
    let headers = new HttpHeaders({token:this._usuarioService.token});
    this.http.get(url,{headers}).subscribe((resp:any)=>{
      this.usuarios=resp.data.usuarios;
      this.medicos=resp.data.medicos;
      this.hospitales=resp.data.hospitales;
    })
  }

}
