import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-post-api',
  imports: [FormsModule, CommonModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {

    ngOnInit(){
      this.getAllEstudantes();
    }
   
    estudanteList:any [] = [];
    estudanteObj:any = {
    "id":"",
    "nome": "",
    "email": "",
    "categoriaEstudantil": ""
    };
    
    constructor(private http: HttpClient){

    }

    getAllEstudantes(){
      this.http.get("http://localhost:8181/api/estudantes/listaestudante").subscribe((res:any) => {
        this.estudanteList = Array.isArray(res) ? res : [];
        //debugger;
      })
    }

    onSaveEstudantes(){
      this.estudanteObj.id = "";
      this.http.post("http://localhost:8181/api/estudantes/salvarestudante", this.estudanteObj, {observe: 'response'})
      .subscribe({
          next: (res: any) => {
            if(res.status === 200 || res.status === 201){
              //debugger;
              alert("Estudante salvo com sucesso");
              this.getAllEstudantes();
              this.resetForm();
            }else{
              alert(res.body?.message || "Erro inesperado");
            }
          },
          error: (err) => {
            alert(err.error?.message || "Erro ao salvar");
          }
          });
         }  

         onEdit(data: any){
          this.estudanteObj = data;
          
         }

         

updateEstudante() {
    this.http.put(`http://localhost:8181/api/estudantes/alterar/${this.estudanteObj.id}`, this.estudanteObj, {observe: 'response'})
    .subscribe({
    next:  (res: any) => {
      console.log(res);
      if(res.status == 200 || res.status == 201){
      alert("Estudante alterado com sucesso");
      this.resetForm();
      }else{
        alert("Falha ao alterar");
      }
    }
    });
    }

    excluir(id:number){
      const isDelete = confirm('Você tem certeza que quer excluir?')
      if(isDelete == true){
      this.http.delete(`http://localhost:8181/api/estudantes/excluir/${id}`, {observe: 'response'})
      .subscribe({
          next: (res:any) => {
            if(res.status === 200 || res.status === 204){
              alert("Estudante excluído com sucesso");
              this.getAllEstudantes();
            }else{
              alert("Error ao excluir estudante")
            }

          },
          error: (err) => {
            if (err.status === 404) {
              alert("Estudante não encontrado");
            } else {
              alert("Erro ao excluir estudante");
            }
            console.error("Erro ao excluir estudante:", err);
          }
          
      });
      }
    }
    resetForm(){
      this.estudanteObj = {
        "id": "",
        "nome": "",
        "email": "",
        "categoriaEstudantil": ""
      };
    }

}
