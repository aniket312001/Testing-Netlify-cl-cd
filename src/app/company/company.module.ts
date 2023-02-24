import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';



@NgModule({
  declarations: [
    EmployeeLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EmployeeLoginComponent
  ]
})
export class CompanyModule { }
