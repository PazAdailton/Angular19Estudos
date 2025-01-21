import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-for',
  imports: [FormsModule, CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  cityList: string[] = ["Bnu", "SP", "Barcelona", "Vitória"];

  employeeArray: any[] = [
    {empId:121, name: "Adailton", city: "Bnu", contact: "555555555"},
    {empId:122, name: "AA", city: "SP", contact: "555555555"},
    {empId:123, name: "BB", city: "Barcelona", contact: "555555555"},
    {empId:124, name: "CC", city: "Vitória", contact: "555555555"},
    {empId:125, name: "DD", city: "Bnu", contact: "555555555"}
  ];

  cityChange(){
    console.log("city changed")
  }
}
