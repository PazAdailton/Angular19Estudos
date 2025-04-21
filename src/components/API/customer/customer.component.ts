import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customer',
  imports: [FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

    customerObj: any = {
    "customerName": "",
    "customerCity": "",
    "mobileNo": "",
    "email": ""
    }

    customerArray: any [] = [];

    constructor(private http: HttpClient, private customerService:CustomerService){
      this.getCustomers();
    }

    
  
    /* getCustomers(){
      this.http.get("/api/api/CarRentalApp/GetCustomers")
      .subscribe((res:any)=> {
        this.customerArray = res.data;
      })
    }
 */

    getCustomers(){
      this.customerService.loadCustomers()
      .subscribe((res:any) => {
        this.customerArray = res.data;
      })
    }

    onSaveCustomer(){
      debugger;
      this.customerService.createNewCustomer(this.customerObj)
      .subscribe({
        next: (res:any) => {
          debugger;
          alert('Customer Created success')
          this.getCustomers();
        }, error: (err) => {
          console.error('Erro ao criar customer', err)
          alert('Error ao criar customer, revise os dados')
        }
      })
    }

    
}
