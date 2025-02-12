import { EventEmitter, Injectable } from "@angular/core";

import { LogService } from "../shared/log.service";

@Injectable()

export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java' , 'Phonegap'];

  constructor(private logService: LogService){
    console.log('cursosService');
  }

  getCursos(){
    this.logService.consoleLog('obtendo lista de cursos')
    return this.cursos
  }

  addCurso(curso: string){
    this.logService.consoleLog(`criando um novo curso ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso)
  }
}



