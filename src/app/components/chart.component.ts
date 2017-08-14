import { Component } from '@angular/core';
import { Crosshair } from '../components/crosshair.component';
import { CandleService } from '../services/candle.service';

import { Candle } from '../models/candle.model';

@Component({
  selector: 'my-chart',
  template: `
    <svg id="chart" (mousemove)="this.moveCrosshair($event.clientX, $event.clientY)">
      <svg:g chart-candles *ngFor="let candle of candles" [x1]="candle.high" [x2]="candle.low" [x]="candle.time" [y]="candle.open" [height]="candle.close"/>
      <svg:g chart-crosshair [crosshair_x]="crosshair_x" [crosshair_y]="crosshair_y"  />
    </svg>
  `,
  styleUrls: ['src/app/components/chart.css']
})

export class Chart {

  crosshair_x: number = 0;
  crosshair_y: number = 0;

  candles: Array<Candle> = [];

  constructor(private candleservice: CandleService){
    this.candles = candleservice.candleData;
  }

  ngOnInit(){

  }

  moveCrosshair(x, y){
    this.crosshair_x = x;
    this.crosshair_y = y;
  }
}
