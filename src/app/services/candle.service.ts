import { Injectable } from '@angular/core';
import { Candle } from '../models/candle.model';
@Injectable()

export class CandleService{
  candleData: Array<Candle> = [];

  constructor() {
    this.candleData.push({ open: 25, high: 30, low: 22, close: 24, volume: 100, time: 10 });

    this.candleData.push({
      open: 30,
      high: 70,
      low: 25,
      close: 67,
      volume: 100,
      time: 22
    });
  }

}
