import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingmod } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoinmentComponent } from './appoinment/appoinment.component';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { HomeComponent } from './home/home.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ShowServiceComponent } from './service/show-service/show-service.component';
import { AddEditServiceComponent } from './service/add-edit-service/add-edit-service.component';
import { ServiceComponent } from './service/service.component';
import { CustomervehicleComponent } from './customervehicle/customervehicle.component';
import { AddEditCustomerComponent } from './customervehicle/add-edit-customer/add-edit-customer.component';
import { AddEditVehicleComponent } from './customervehicle/add-edit-vehicle/add-edit-vehicle.component';
import { ShowCustomervehicleComponent } from './customervehicle/show-customervehicle/show-customervehicle.component';
import { AddEditDealerComponent } from './dealer/add-edit-dealer/add-edit-dealer.component';
import { ShowDealerComponent } from './dealer/show-dealer/show-dealer.component';
import { ShowMechanicalComponent } from './mechanical/show-mechanical/show-mechanical.component';
import { AddEditMechanicalComponent } from './mechanical/add-edit-mechanical/add-edit-mechanical.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { MatSelectModule } from '@angular/material/select';
import { AppoinmentTrackingComponent } from './appoinment-tracking/appoinment-tracking.component';
import { ErrorComponent } from './error/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Configuration } from 'msal';
import {
  MsalModule,
  MsalInterceptor,
  MSAL_CONFIG,
  MSAL_CONFIG_ANGULAR,
  MsalService,
  MsalAngularConfiguration
} from '@azure/msal-angular';

import { msalConfig, msalAngularConfig } from './app-config';

function MSALConfigFactory(): Configuration {
  return msalConfig;
}

function MSALAngularConfigFactory(): MsalAngularConfiguration {
  return msalAngularConfig;
}
@NgModule({
  declarations: [
    routingmod,
    AppComponent,
    AppoinmentComponent,
    AddEditAppoinmentComponent,
    HomeComponent,
    ShowServiceComponent,
    AddEditServiceComponent,
    ServiceComponent,
    CustomervehicleComponent,
    AddEditCustomerComponent,
    AddEditVehicleComponent,
    ShowCustomervehicleComponent,
    AddEditDealerComponent,
    ShowDealerComponent,
    ShowMechanicalComponent,
    AddEditMechanicalComponent,
    AppoinmentTrackingComponent,
    ErrorComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MatCardModule,
    MsalModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    MatSelectModule,
    DataTablesModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),

    MDBBootstrapModule.forRoot()

  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_CONFIG,
      useFactory: MSALConfigFactory
    },
    {
      provide: MSAL_CONFIG_ANGULAR,
      useFactory: MSALAngularConfigFactory
    },
    MsalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
