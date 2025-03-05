import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from './../alunos.service';

@Component({
  selector: 'app-aluno-form',
  standalone: false,
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.css'
})
export class AlunoFormComponent {

  aluno: any = {}
  inscricao!: Subscription;

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
}
