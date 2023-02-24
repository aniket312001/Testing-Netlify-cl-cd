import { CompanyModule } from './company/company.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ConComponent } from './con/con.component';
import { ConsComponent } from './cons/cons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DisplayGoogleMapComponent } from './display-google-map/display-google-map.component'
import { AgmCoreModule } from '@agm/core';

import { WebcamModule } from 'ngx-webcam';
import { NewComponent } from './new/new.component';
import { PayComponent } from './pay/pay.component';
// import { NgxStripeModule } from 'ngx-stripe';

// import { PaymentGatewayModule } from 'adyen-payment-angular';
import { StripeModule } from "stripe-angular"

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ConComponent,
    ConsComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    DisplayGoogleMapComponent,
    NewComponent,
    PayComponent,

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    CompanyModule, WebcamModule,
    FormsModule,HttpClientModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCfAj2b7ZhU8BMujlnDodqHj_cyARd520c'
    }),
    // PaymentGatewayModule

    // NgxStripeModule.forRoot('pk_test_51MTLclSEGy4UZS1BuopM2uWOCis8YnyssOcX0MCvj0PWtP0DaZCxJmlGHvDw9wAynB9HdYwB68Lv1mJnnJQ1FA8f00iIxWxTIC'),
    StripeModule.forRoot("pk_test_51MTLclSEGy4UZS1BuopM2uWOCis8YnyssOcX0MCvj0PWtP0DaZCxJmlGHvDw9wAynB9HdYwB68Lv1mJnnJQ1FA8f00iIxWxTIC")
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
