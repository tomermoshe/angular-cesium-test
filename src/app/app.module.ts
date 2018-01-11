import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
