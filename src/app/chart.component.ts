import { Component } from '@angular/core';
import { Candles } from './candles';

@Component({
  selector: 'my-chart',
  template: '<h1>{{myTest}}</h1>'
})

export class Chart {

  myTest: string;

  constructor(){
    this.myTest = Candles.candle;
  }





}
