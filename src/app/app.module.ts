import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import{ jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule,
    jqxSchedulerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AppComponent ]
})
export class AppModule { }
