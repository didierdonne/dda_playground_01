import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent }  from './app.component';

import { Chart } from './components/chart.component';
import { Crosshair } from './components/crosshair.component';
import { Candles } from './components/candles.component';
import { MainMenu } from './components/mainmenu.component';

import { CandleService } from './services/candle.service';

const appRoutes: Routes = [
  { path : '', component: MainMenu },
  { path : 'chart', component: Chart }
]

@NgModule({
  imports:      [
    RouterModule.forRoot(appRoutes, { enableTracing: true } ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap:    [ AppComponent ],
  declarations: [
    AppComponent,
    Chart,
    Crosshair,
    Candles,
    MainMenu
    ],
  providers:    [
    CandleService
  ]
})

export class AppModule {

}
