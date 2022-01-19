import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { SvgComponent } from './svg/svg.component';


@NgModule({
  declarations: [
    AppComponent,
    CartTableComponent,
    SvgComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
