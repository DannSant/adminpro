import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

  @Input('chartLabels') doughnutChartLabels:string[] = [];
  @Input('chartData') doughnutChartData:number[] = [];

  doughnutChartType:string = 'doughnut';

  constructor() { }

  ngOnInit() {
    console.log(this.doughnutChartLabels);
  }

}
