import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
