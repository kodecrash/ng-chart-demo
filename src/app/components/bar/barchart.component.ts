import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
@Component({
  selector: 'bar-chart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions: ChartConfiguration['options'];
  @Input() chartLegends!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.chartData)
  }

}
