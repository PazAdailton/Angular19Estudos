import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ng-class',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divColor: string = "bg-success";
  isChecked: boolean = false;
  divClassName: string = "";

  addDivColor(className: string){
    this.divColor = className;

  }

  addCheck(){
    this.isChecked = true;
  }



}
