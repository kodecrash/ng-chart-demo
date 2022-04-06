import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { BarChartComponent } from './components/bar/barchart.component';
import { LinechartComponent } from './components/linechart/linechart.component';
import { PiechartComponent } from './components/piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LinechartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
