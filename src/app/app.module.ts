import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { ShowAppoinmentComponent } from './appoinment/show-appoinment/show-appoinment.component';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { HomeComponent } from './home/home.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShowServiceComponent } from './service/show-service/show-service.component';
import { AddEditServiceComponent } from './service/add-edit-service/add-edit-service.component';
import { ServiceComponent } from './service/service.component';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';
import { AddEditCustomerComponent } from './customervehicle/add-edit-customer/add-edit-customer.component';
import { AddEditVehicleComponent } from './customervehicle/add-edit-vehicle/add-edit-vehicle.component';
import { ShowCustomervehicleComponent } from './customervehicle/show-customervehicle/show-customervehicle.component';



@NgModule({
  declarations: [
    AppComponent,
    AppoinmentComponent,
    ShowAppoinmentComponent,
    AddEditAppoinmentComponent,
    HomeComponent,
    ShowServiceComponent,
    AddEditServiceComponent,
    ServiceComponent,
    CustomervehicleComponent,
    AddEditCustomerComponent,
    AddEditVehicleComponent,
    ShowCustomervehicleComponent

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
