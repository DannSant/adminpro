import { Component, OnInit } from '@angular/core';


import {Observable} from 'rxjs/Observable';
import {retry,filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {


    this.crearObservable().pipe(retry(2))
    .subscribe(
      (num)=>console.log(num),
      (err)=>console.log(err),
      ()=>console.log("terminado")
    );

  }

  crearObservable(){
    return new Observable(observer =>{
      let cont=0;
      let intervalo = setInterval(()=>{
        cont++;
        observer.next(cont)
        if(cont==3){
          clearInterval(intervalo);
          observer.complete();
        }
        // if(cont==2){
        //   clearInterval(intervalo);
        //   observer.error("ya valio");
        // }
      },1000)
    }).pipe(
      filter( (valor:number,index) =>{
        //console.log(valor,index);
        if((valor % 2)==1){
            return true;
        }else {
            return false;
        }

      })
    );


  }

  ngOnInit() {
  }

}
