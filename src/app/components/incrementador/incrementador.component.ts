import { Component, OnInit , Input, Output, EventEmitter,ViewChild,ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtPorcentaje') txtPorcentaje:ElementRef;

  @Input() porcentaje:number = 50;
  @Input('titulo') leyenda:string="Leyenda";

  @Output() cambioValor: EventEmitter<number>= new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number){

    if(this.porcentaje>=100 && valor>0) {
      this.porcentaje=100;
      return;
    }

    if(this.porcentaje<=0 && valor<100){
      this.porcentaje=0;
      return;
    }

    this.porcentaje += valor;
    this.cambioValor.emit(this.porcentaje);
    this.txtPorcentaje.nativeElement.focus();
  }

  onChange(valor:number){
    //let elemento:any = document.getElementsByName("porcentaje")[0];



    if(valor>=100){
      this.porcentaje=100;
    }else if(valor<=0){
      this.porcentaje=0;
    }else {
      this.porcentaje=valor;
    }

    this.txtPorcentaje.nativeElement.value = Number(this.porcentaje);

    this.cambioValor.emit(this.porcentaje);
  }

}
