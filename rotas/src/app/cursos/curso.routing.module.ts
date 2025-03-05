
import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";

const cursosRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cursos', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: 'curso/:id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoute)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
