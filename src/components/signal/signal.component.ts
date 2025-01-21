import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
  /* changeDetection: ChangeDetectionStrategy.OnPush */
})
export class SignalComponent {

    firstName = signal("Maria");
    lastName = signal<string>("Silva");
    courseName: string = "angular";
    rollNo = signal<number>(0);


    constructor(){
      const value = this.firstName();
      setTimeout(() => {
        debugger;
        this.courseName = "React Js";
        this.firstName.set("Hay");
        debugger;
      },5000);
    }

    onIncrement(){
      this.rollNo.update(oldValue=> oldValue+1);
    }

}
