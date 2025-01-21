import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = "Charles";
  tipo: number = 123;
  isActive: boolean = true;
  currentData: Date = new Date();
  placeHolder: string = "Enter full name"
  divClassName: string = "bg-primary";
  selectCity: string = "";

      constructor(private router: Router){
        console.log(this.firstName)
        
      
      }

      navagator(){
        this.router.navigateByUrl("/admin");
      }

      showMessage(){
        window.alert("Welcome to 19 Tutorial Angular")
      }

      cityChange(){
        console.log("City Changed")
      }

}
