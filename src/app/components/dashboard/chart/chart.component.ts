import { Component, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import * as agCharts from 'ag-charts-community';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    options: any;

    data = [
  { duration: 99107447000,status: 'passed' },
  { duration: 54645447000,status: 'failed' },
  { duration: 42211145400,status: 'passed' },
  { duration: 22447447000,status: 'failed' },
   ];

  constructor()  {
    this.options = {
      autoSize: true,
      title: {
        text: 'Scenarios',
        fontSize: 18,
      },
      subtitle: { text: '' },
      series: [
        {
          data: this.data,
          type: 'pie',
          labelKey: 'status',
          angleKey: 'duration',
          label: { minAngle: 0 },
          callout: { strokeWidth: 2 },
          fills: [
            '#febe76',
            '#ff7979',
            '#badc58',
            '#f9ca23',
            '#f0932b',
            '#eb4c4b',
            '#6ab04c',
            '#7ed6df',
          ],
          strokes: [
            '#b28553',
            '#b35555',
            '#829a3e',
            '#ae8d19',
            '#a8671e',
            '#a43535',
            '#4a7b35',
            '#58969c',
          ],
        },
      ],
      legend: { enabled: false },
    }
  }
  ngOnInit(): void {
  }
}
