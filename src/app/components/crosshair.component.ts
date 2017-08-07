import { Component, Input } from '@angular/core';

@Component({
  selector: '[chart-crosshair]',
  template: `
    <svg:line id="crosshair_horizontal" class="crosshair" [attr.x1]="0" [attr.y1]="crosshair_y" [attr.x2]="640" [attr.y2]="crosshair_y" />
    <svg:line id="crosshair_vertical" class="crosshair" [attr.x1]="crosshair_x" [attr.y1]="0" [attr.x2]="crosshair_x" [attr.y2]="480" />
    {{ corsshairX }}
  `,
  styleUrls: [ './src/app/components/crosshair.component.css' ]
})

export class Crosshair{

  @Input() crosshair_x;
  @Input() crosshair_y;

}
