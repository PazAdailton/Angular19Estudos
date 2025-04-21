import { Component, resource } from '@angular/core';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

    userList = resource({
      loader:() => {
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json() as Promise<any[]>)
      }
    })

    ReloadData(){
      this.userList.reload();
    }


}
