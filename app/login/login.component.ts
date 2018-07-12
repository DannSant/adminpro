import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
declare function init_plugins();
declare const gapi:any;
//var initPlugins:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email:string;
  auth2:any;
  constructor(public router:Router, public _usuarioService: UsuarioService) { }

  ngOnInit() {

    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem("email") || "";
    if(this.email.length>0){
      this.recuerdame=true;
    }

  }

  googleInit(){
    gapi.load("auth2",()=>{
      this.auth2=gapi.auth2.init({
        client_id:"873036881743-a4csrgn8m9ocnc8nmrtpau6qqldse76g.apps.googleusercontent.com",
        cookiepolicy:"single_host_origin",
        scope:"profile email"
      });
      this.attachSignIn(document.getElementById("btnGoogle"));
    });
  }

  attachSignIn(element){
    this.auth2.attachClickHandler(element,{},(googleUser)=>{
      let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      this._usuarioService.loginGoogle(token).subscribe((resp)=>{
        window.location.href="#/dashboard";
      });
    });
  }

  ingresar(forma: NgForm){
    if(forma.invalid){
      return;
    }
    let usuario = new Usuario(null,forma.value.email,forma.value.password);
    let recordar = forma.value.recuerdame;
    this._usuarioService.login(usuario,recordar).subscribe((resp)=>{
      //console.log(resp);
        this.router.navigate(["/dashboard"]);
    });
  
  }

}