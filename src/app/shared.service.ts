import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import {ShowServiceComponent} from './service/show-service/show-service.component';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="https://localhost:44370/api"

  constructor(private http:HttpClient ) { }

getAppointmentList()
{
  return this.http.get<any>(this.APIUrl+'/Appointment/allAppointments');
}

getDealerList()
{
  return this.http.get<any>(this.APIUrl+'/Dealer/allDealers');
}
addAppoinment(val:any){
return this.http.post(this.APIUrl+'/Appoinment/CreateAppoinments',val);
}
editAppoinment(val:any){
return this.http.put(this.APIUrl+'/Appoinment/UpdateAppoinments',val);
}
deleteAppoinment(id:any){
  return this.http.delete(this.APIUrl+'/Appoinment/DeleteAppoinments/'+id);
}
deleteDealer(id:any){
  return this.http.delete(this.APIUrl+'/Dealer/DeleteDealers/'+id);
}
getCustomerList()
{
  return this.http.get<any>(this.APIUrl+'/Customer/allCustomers');
}
addCustomer(val:any){
return this.http.post(this.APIUrl+'/Customer/CreateCustomers',val);
}

addDealer(val:any){
  return this.http.post(this.APIUrl+'/Dealer/CreateDealers',val);
}
editCustomer(val:any){
return this.http.put(this.APIUrl+'/Customer/UpdateCustomers/',val);
}
editDealer(val:any){
return this.http.put(this.APIUrl+'/Dealer/UpdateDealers/',val);
}
deleteCustomer(id:any){
  return this.http.delete(this.APIUrl+'/Customer/DeleteCustomers/'+id);
}

getVehicleList()
{
  return this.http.get<any>(this.APIUrl+'/Vehicle/allVehicles');
}
addVehicle(val:any){
return this.http.post(this.APIUrl+'/vehicle',val);
}
editVehicle(val:any){
return this.http.put(this.APIUrl+'/vehicle',val);
}
deleteVehicle(id:any){
  return this.http.delete(this.APIUrl+'/vehicle/'+id);
}

getServiceList()
{
  return this.http.get<any>(this.APIUrl+'/Service/allServices');
}
addService(val:any){
return this.http.post(this.APIUrl+'/service',val);
}
editService(val:any){
return this.http.put(this.APIUrl+'/service',val);
}
deleteService(id:any){
  return this.http.delete(this.APIUrl+'/service/'+id);
}
}
