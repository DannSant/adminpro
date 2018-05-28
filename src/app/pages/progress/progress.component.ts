import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeAzul:number = 20;
  porcentajeVerde:number = 80;

  constructor() { }

  ngOnInit() {
  }



}
