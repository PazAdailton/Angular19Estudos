import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = '/api/api/CarRentalApp/';
  constructor(private http: HttpClient) { }

  loadCustomers(){
  return  this.http.get(this.apiUrl + "GetCustomers");
  }

  createNewCustomer(obj:any){
    return this.http.post(this.apiUrl + "CreateNewCustomer", obj);
  }


}


