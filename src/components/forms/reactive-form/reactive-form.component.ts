import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl("", Validators.required),
    lName: new FormControl("", [Validators.required, Validators.minLength(5)]),
    userName: new FormControl("",[Validators.email, Validators.pattern("")]),
    city: new FormControl(),
    state: new FormControl("Bahia"),
    zip: new FormControl(),
    isAgree: new FormControl(false)
  })

  constructor(){
    this.userForm.controls['state'].disable();
    setTimeout(() => {
      this.userForm.controls['state'].enable();
    }, 5000);
    
  }

  onUserSave(){
    const isValid = this.userForm.valid;
    const formValue = this.userForm.value;
    debugger;
  }
  
}
