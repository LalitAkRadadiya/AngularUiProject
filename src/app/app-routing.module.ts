import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppoinmentComponent} from './appoinment/appoinment.component';
import {HomeComponent} from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { DealerComponent } from './dealer/dealer.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';
import { CommonModule } from '@angular/common';  

import { ShowMechanicalComponent } from './mechanical/show-mechanical/show-mechanical.component';
const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'appoinment',component:AppoinmentComponent},
  {path:'service',component:ServiceComponent},
  {path:'dealer',component:DealerComponent},
  {path:'mechanic',component:MechanicalComponent},
  {path:'customervehicle', component:CustomervehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmod =[DealerComponent,MechanicalComponent];
