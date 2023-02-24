import { ByeComponent } from './bye/bye.component';
import { HellComponent } from './hell/hell.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: '', component: CustomersComponent, children:[
    {path:'bye',component:ByeComponent}
  ]},
  {path:'hell',component:HellComponent,children:[
    {path:'bye',component:ByeComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
