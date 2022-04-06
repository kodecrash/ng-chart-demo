import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions: ChartConfiguration['options'];
  @Input() chartLegends!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }

}
