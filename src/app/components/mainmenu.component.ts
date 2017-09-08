import { Component, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate, state, stagger, query, keyframes } from '@angular/animations';

@Component({
  templateUrl: 'src/app/components/mainmenu.component.html',
  styleUrls: [ 'src/app/components/mainmenu.component.css' ],
  animations: [
    trigger('menuAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity : 0 }), { optional : true }),
        query(':enter', stagger('200ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 0.6})
          ]))
        ]), { optional : true })
      ])
    ])
  ]
})

export class MainMenu{

  items: Array<any> = [];

  constructor(){
    this.addItem(['Main','Charts','Settings']);
  }


  addItem(itemList: Array<any>){
    for (let i of itemList){
        this.items.push(i);
    }
  }

}
