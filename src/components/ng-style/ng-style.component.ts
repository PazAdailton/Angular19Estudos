import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  divStyleColor: string = "";
  isChecked: boolean = false;

  myCss: any = {
    'background-color':'red',
    'width':'200px',
    'height':'200px'
  };

  addDivColor(color: string){
    this.divStyleColor = color;
  }
}


