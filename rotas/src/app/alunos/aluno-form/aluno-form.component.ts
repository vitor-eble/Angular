import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent implements IFormCanDeactivate {

  aluno: any = {}
  inscricao!: Subscription;
  private formMudou: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(){
    this.inscricao = this.activatedRoute.params.subscribe(
      (params:any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id)

        if(this.aluno === null){
          this.aluno = {};
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }

  onInput(){
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota(){
    if(this.formMudou){
      return confirm('Tem certeza que deseja sair dessa página?');
    }
    return true;
}

  podeDesativar(){
    return this.podeMudarRota();
  }
}
