import { Injectable } from '@angular/core';

import { Aluno } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    { id: 1, nome: 'aluno01', email: 'aluno01@email.com'},
    { id: 2, nome: 'aluno02', email: 'aluno02@email.com'},
    { id: 3, nome: 'aluno03', email: 'aluno03@email.com'},
    { id: 4, nome: 'aluno04', email: 'aluno04@email.com'},
    { id: 5, nome: 'aluno05', email: 'aluno05@email.com'},
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number) {
    for ( let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      if(aluno.id == id){
        return aluno
      }
    }
    return null
  }

}
