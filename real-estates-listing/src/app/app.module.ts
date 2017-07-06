import { BrowserModule }                from '@angular/platform-browser';
import { NgModule }                     from '@angular/core';
import { FormsModule }                  from '@angular/forms';
import { HttpModule, JsonpModule }      from '@angular/http';

import { ButtonsModule }                from 'ngx-bootstrap';

import { AppComponent }                 from './app.component';
import { RealEstatesListingsComponent } from './real-estates-listings/real-estates-listings.component';
import { AddressStreetPipe }            from './pipes/address-street.pipe';
import { AddressStatePipe }             from './pipes/address-state.pipe';
import { OrderByPipe }                  from './pipes/orderBy.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RealEstatesListingsComponent,
    AddressStreetPipe,
    AddressStatePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
