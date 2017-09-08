import { Component } from '@angular/core';
import { Crosshair } from '../components/crosshair.component';
import { CandleService } from '../services/candle.service';

import { Candle } from '../models/candle.model';

@Component({
  templateUrl: "src/app/components/chart.component.html",
  styleUrls: ['src/app/components/chart.component.css']
})

export class Chart {

  crosshair_x: number = 0;
  crosshair_y: number = 0;
  crosshair_h: number = 0;
  crosshair_w: number = 0;

  candles: Array<Candle> = [];

  constructor(private candleservice: CandleService){
    this.candles = candleservice.candleData;
  }

  ngOnInit(){

  }

  moveCrosshair(x, y, w, h, e){
    this.crosshair_x = x;
    this.crosshair_y = y;
    this.crosshair_w = w;
    this.crosshair_h = h;
  }
}
