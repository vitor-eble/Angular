import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from "./alunos.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosGuard } from "../guards/alunos.guard";
import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunosDetalheResolve } from "./guards/alunos-detalhe.resolver";

const alunosRoute: Routes = [
  { path: '', component: AlunosComponent, canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunosDetalheResolve } },
      { path: ':id/edit', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
  ]},

]

@NgModule({
  imports: [RouterModule.forChild(alunosRoute)],
  exports:[RouterModule]
})
export class AlunosRoutingModule { }
