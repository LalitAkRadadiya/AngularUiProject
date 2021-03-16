import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { AddEditAppoinmentComponent } from './appoinment/add-edit-appoinment/add-edit-appoinment.component';
import { ShowServiceComponent } from './service/show-service/show-service.component';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // readonly APIUrl = "https://lalitakradadiya.azurewebsites.net/api"

  readonly APIUrl = "https://localhost:44370/api"
  constructor(private http: HttpClient ) { }
  
 

  getAppointmentById(id: any):Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Appointment/AppointmentTracker/' + id);
  }
  editAppoinmentStatus(val: any) {
    return this.http.put(this.APIUrl + '/Appointment/UpdateStatus', val);
  }

 getEditAppoinmentList(id: any){
  return this.http.get<any>(this.APIUrl + '/Appointment/AppointmentEdit/' + id);
 }



  getAppointmentList() :Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Appointment/allAppointments');
  }
  addAppoinment(val: any) {
    return this.http.post(this.APIUrl + '/Appoinment/CreateAppoinments', val);
  }
  editAppoinment(val: any) {
    return this.http.put(this.APIUrl + '/Appoinment/UpdateAppoinments', val);
  }
  deleteAppoinment(id: any) {
    return this.http.delete(this.APIUrl + '/Appoinment/DeleteAppoinments/' + id);
  }

  // getAppointmentServiceList() :Observable<any[]> {
  //   return this.http.get<any>(this.APIUrl + '/AppointmentService/allAppointmentServices');
  // }
  getAppointmentServiceList(id: any) :Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/AppointmentService/GetAppServicesByAppId/'+id);
  }
  getPlanningList(id: any) :Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Planning/GetPlanningByAppId/'+id);
  }
  deleteAppoinmentService(id: any) {
    return this.http.delete(this.APIUrl + '/AppointmentService/DeleteAppointmentServices/' + id);
  }
  deletePlanning(id: any){
    return this.http.delete(this.APIUrl + '/Planning/DeletePlannings/' + id);
  }




  addAppoinmentService(val: any) {
    return this.http.post(this.APIUrl + '/AppoinmentService/CreateAppoinmentServices', val);
  }

  getDealerList():Observable<any[]>  {
    return this.http.get<any>(this.APIUrl + '/Dealer/allDealers');
  }
  addDealer(val: any) {
    return this.http.post(this.APIUrl + '/Dealer/CreateDealers', val);
  }
  deleteDealer(id: any) {
    return this.http.delete(this.APIUrl + '/Dealer/DeleteDealers/' + id);
  }
  editDealer(val: any) {
    return this.http.put(this.APIUrl + '/Dealer/UpdateDealers/', val);
  }



  getCustomerList():Observable<any[]>  {
    return this.http.get<any>(this.APIUrl + '/Customer/allCustomers');
  }
  addCustomer(val: any) {
    return this.http.post(this.APIUrl + '/Customer/CreateCustomers', val);
  }
  editCustomer(val: any) {
    return this.http.put(this.APIUrl + '/Customer/UpdateCustomers/', val);
  }
  deleteCustomer(id: any) {
    return this.http.delete(this.APIUrl + '/Customer/DeleteCustomers/' + id);
  }


  dealerDropdown(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Dealer/DealerDropdown');
  }
  serviceDropdown(id : any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Service/ServiceDropdown/'+ id);
  }
  mechanicDropdown(id : any):Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Mechanic/MechanicDropdown/'+ id);
  }

  getVehicalById(id : any){
    return this.http.get<any>(this.APIUrl + '/VehicleByCustomerId/'+id);

  }
  getVehicleList() {
    return this.http.get<any>(this.APIUrl + '/Vehicle/allVehicles');
  }
  addVehicle(val: any) {
    return this.http.post(this.APIUrl + '/Vehicle/CreateVehicles', val);
  }
  editVehicle(val: any) {
    return this.http.put(this.APIUrl + '/Vehicle/UpdateVehicles', val);
  }
  deleteVehicle(id: any) {
    return this.http.delete(this.APIUrl + '/Vehicle/DeleteVehicles/' + id);
  }


  addPlanning(val: any){
    return this.http.post(this.APIUrl + '/Planning/CreatePlanning', val);
  }
  errorMsg : any;
  getCustomerVehicleInfo(LicencePlate: string): Observable<any> {
    return this.http.get<any>(this.APIUrl + "/Vehicle/GetVehicleInfo?LicencePlate=" + LicencePlate).pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              this.errorMsg = `Error: ${error.error.message}`;
          } else {
              this.errorMsg = `Error: ${error.message}`;
          }
          return of([]);
      })
  );;
  }



  getServiceList() :Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Service/allServices');
  }
  addService(val: any) {
    return this.http.post(this.APIUrl + '/Service/CreateServices', val);
  }
  editService(val: any) {
    return this.http.put(this.APIUrl + '/Service/UpdateServices', val);
  }
  deleteService(id: any) {
    return this.http.delete(this.APIUrl + '/Service/DeleteServices/' + id);
  }

  
  getMechanicList() :Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Mechanic/allMechanics');
  }
  addMechanic(val: any) {
    return this.http.post(this.APIUrl + '/Mechanic/CreateMechanics', val);
  }
  editMechanic(val: any) {
    return this.http.put(this.APIUrl + '/Mechanic/UpdateMechanics', val);
  }
  deleteMechanic(id: any) {
    return this.http.delete(this.APIUrl + '/Mechanic/DeleteMechanics/' + id);
  }

}
