import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso-criado',
  standalone: false,
  templateUrl: './receber-curso-criado.component.html',
  styleUrl: './receber-curso-criado.component.css'
})
export class ReceberCursoCriadoComponent implements OnInit {

  curso: string = ''

  constructor(private cursosService: CursosService) {
    curso: String
   }

  ngOnInit() {
    this.cursosService.emitirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
