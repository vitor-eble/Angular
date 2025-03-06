import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";

const alunosRoute: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent},
    { path: ':id/edit', component: AlunoFormComponent },
  ]},

]

@NgModule({
  imports: [RouterModule.forChild(alunosRoute)],
  exports:[RouterModule]
})
export class AlunosRoutingModule { }
