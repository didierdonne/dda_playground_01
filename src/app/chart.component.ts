import { Component } from '@angular/core';
import { Crosshair } from './components/crosshair.component';
import { Candle } from './models/candle.model';

@Component({
  selector: 'my-chart',
  template: `
    <svg id="chart" (mousemove)="this.moveCrosshair($event.clientX, $event.clientY)">
      <svg:g [crosshair_x]="crosshair_x" [crosshair_y]="crosshair_y" chart-crosshair />
      <svg:g chart-candles />
    </svg>
  `,
  styleUrls: ['src/app/chart.css']
})

export class Chart {

  crosshair_x: number = 0;
  crosshair_y: number = 0;

  candleData: Array<Candle> = [];

  constructor(){
    this.candleData.push({
      o: 25,
      h: 30,
      l: 22,
      c: 24,
      vol: 100,
      time: '1200'
    })
  }

  ngOnInit(){
  }

  moveCrosshair(x, y){
    this.crosshair_x = x;
    this.crosshair_y = y;
  }
}
