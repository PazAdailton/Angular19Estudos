import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {

  div1Visiable: boolean = true;

  number1: string = "";
  number2: string = "";

  hide1(){
    this.div1Visiable = false;
  }

  show1(){
    this.div1Visiable = true;
  }
}
