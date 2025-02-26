import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos!: any[];

  constructor(
    private cursosService: CursosService,
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
