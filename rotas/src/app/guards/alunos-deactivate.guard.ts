import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot , CanDeactivate } from "@angular/router";

import { Observable } from "rxjs";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./iform-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate>{

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean>| boolean {

    console.log('guarda de desativação');

    return component.podeDesativar ? component.podeDesativar() : true;
  }

}