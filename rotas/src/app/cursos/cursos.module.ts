import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursosRoutingModule } from './curso.routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
    // RouterModule
  ],
})
export class CursosModule { }
