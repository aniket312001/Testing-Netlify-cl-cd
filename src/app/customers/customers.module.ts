import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { HellComponent } from './hell/hell.component';
import { ByeComponent } from './bye/bye.component';


@NgModule({
  declarations: [
    CustomersComponent,
    HellComponent,
    ByeComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
