import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

@Component({
  selector: 'line-chart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  @Input() chartData!: any;
  @Input() chartLabels!: Array<any>;
  @Input() chartOptions!: ChartOptions;
  @Input() chartLegends!: boolean;
  @Input() chartPlugins!: any[];
  
  constructor() { }

  ngOnInit(): void {
   
    if (this.chartOptions && this.chartOptions.plugins && this.chartOptions.plugins['zoom']) {
      Chart.register(zoomPlugin);
      this.chartPlugins = [...this.chartPlugins, zoomPlugin];
    }
    console.log('Line Chart initialized!!!');
  }

}
