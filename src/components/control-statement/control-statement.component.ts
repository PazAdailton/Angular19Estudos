import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [CommonModule, FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css'
})
export class ControlStatementComponent {

  div1Visiable: boolean = true; 
  isChecked: boolean = false;
  dayName: string = "";

  employeeArray: any[] = [
    {empId:121, name: "Adailton", city: "Bnu", contact: "555555555"},
    {empId:122, name: "AA", city: "SP", contact: "555555555"},
    {empId:123, name: "BB", city: "Barcelona", contact: "555555555"},
    {empId:124, name: "CC", city: "Vitória", contact: "555555555"},
    {empId:125, name: "DD", city: "Bnu", contact: "555555555"}
  ];

  cityList: string[] = [
    "BA", "SP", "Madrid", "BNU"
  ];

  show(isShow: boolean){
    this.div1Visiable = isShow;
  }

}
