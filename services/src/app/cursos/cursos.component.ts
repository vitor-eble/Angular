import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
  // providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  // cursosService: CursosService;

  constructor(private cursosService: CursosService){
    // this.cursosService = new CursosService()
    // this.cursosService = _cursosService
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      curso => this.cursos.push(curso)
      // function(curso){
      //   console.log(curso);
      // }
    );
  }
}
