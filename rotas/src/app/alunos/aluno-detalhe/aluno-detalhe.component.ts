import { Component, OnDestroy, OnInit } from '@angular/core';

import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../alunos';

@Component({
  selector: 'app-aluno-detalhe',
  standalone: false,
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.css'
})
export class AlunoDetalheComponent {

  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private AlunosService: AlunosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     let id = params['id']

    //     this.aluno = this.AlunosService.getAluno(id)
    //   }
    // )

    this.inscricao = this.activatedRoute.data.subscribe(
      (info) => {
        console.log(info);
        this.aluno = info['aluno'];
      }
    );
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'edit']);
  }

}
