import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

   
    estudanteList:any [] = [];
    estudanteObj:any = {
    "nome": "",
    "email": "",
    "categoriaEstudantil": ""
    };
    
    constructor(private http: HttpClient){

    }

    getAllEstudantes(){
      this.http.get("http://localhost:8181/api/estudantes/listaestudante").subscribe((res:any) => {
        this.estudanteList = Array.isArray(res) ? res : [];
        debugger;
      })
    }

    onSaveEstudantes(){
      this.http.post("http://localhost:8181/api/estudantes/salvarestudante", this.estudanteObj).subscribe((res:any) => {
        debugger;
        if(res.status === 200 || res.code ===200){
          alert("Estudante criado com sucesso");
          this.resetForm();
        }else{
          alert(res.message)
        }
      })
      
    }

    resetForm(){
      this.estudanteObj = {
        "nome": "",
        "email": "",
        "categoriaEstudantil": ""
      };
    }

}
