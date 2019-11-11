import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2StripeAppComponent } from './angular2-stripe.component';

@NgModule({
  declarations: [
    Angular2StripeAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [Angular2StripeAppComponent]
})
export class AppModule { }
