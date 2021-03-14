import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppoinmentComponent} from './appoinment/appoinment.component';
import {HomeComponent} from './home/home.component';
import { ServiceComponent } from './service/service.component';

import { MsalGuard } from '@azure/msal-angular';
import { DealerComponent } from './dealer/dealer.component';
import { MechanicalComponent } from './mechanical/mechanical.component';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';
import { CommonModule } from '@angular/common';  
import { ErrorComponent } from './error/error.component';
import { AppoinmentTrackingComponent } from './appoinment-tracking/appoinment-tracking.component';
import { ShowMechanicalComponent } from './mechanical/show-mechanical/show-mechanical.component';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'appoinment',component:AppoinmentComponent,canActivate: [MsalGuard]},
  {path:'service',component:ServiceComponent,canActivate: [MsalGuard]},
  {path:'dealer',component:DealerComponent,canActivate:[MsalGuard]},
  {path:'mechanic',component:MechanicalComponent,canActivate:[MsalGuard]},
  {path:'tracking/:id',component:AppoinmentTrackingComponent},
  {path:'customervehicle', component:CustomervehicleComponent,canActivate:[MsalGuard]},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingmod =[AppoinmentComponent,AddEditAppoinmentComponent,AppoinmentTrackingComponent,ServiceComponent,DealerComponent,MechanicalComponent,CustomervehicleComponent];
