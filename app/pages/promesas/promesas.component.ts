import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar().then(
      ()=>console.log("todo bien")
    )
    .catch(
      (err)=>console.error("error",err)
    );

  }

  ngOnInit() {
  }

  contar(){
    let promesa = new Promise((resolve,reject)=>{
      let contador=0;
      let intervalo = setInterval(()=>{
        contador++;
        console.log(contador)
        if(contador==3){
          resolve();
          clearInterval(intervalo);
        }
      },1000)
    });
    return promesa;

  }

}
