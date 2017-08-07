import { Component, Input } from '@angular/core';

@Component({
  selector: '[chart-candles]',
  template: `
    <svg:line class="candleLine" [attr.x1]="x" [attr.y1]="x1" [attr.x2]="x" [attr.y2]="x2" [attr.stroke-width]="2" />
    <svg:rect class="candleBody" [attr.x]="x" [attr.width]="width" [attr.y]="y" [attr.height]="height" />
  `,
  styleUrls: [ './src/app/components/candles.component.css' ]
})

export class Candles{

  @Input() x: number;
  @Input() y: number;
  @Input() height: number;
  width: number = 10;

  @Input() x1: number;
  @Input() x2: number;

}
