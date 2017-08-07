import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { Chart } from './chart.component';
import { Crosshair } from './components/crosshair.component';
import { Candles } from './components/candles.component';

import { CandleService } from './services/candle.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent, Chart, Crosshair, Candles ],
  providers:    [ CandleService ]
})

export class AppModule {

}
