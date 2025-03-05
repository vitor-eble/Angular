import { Component, OnInit } from '@angular/core';

import { AlunosService } from './alunos.service';
@Component({
  selector: 'app-alunos',
  standalone: false,
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

  alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  ngOnInit(){
    this.alunos = this.alunosService.getAlunos();
  }

}
