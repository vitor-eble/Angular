import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, MaybeAsync, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(    //metodo que verifica se o usuario esta autenticado
    route: ActivatedRouteSnapshot,    //captura a rota que o usuario esta tentando acessar
    state: RouterStateSnapshot    //captura o estado da rota
  ): Observable<boolean> | boolean {    //retorna um observable ou um boolean

    if(this.authService.UsuarioEstaAutenticado()){    //verifica se o usuario esta autenticado
      return true;    //se estiver autenticado, retorna true
    }
    this.router.navigate(['/login']);     //se nao estiver autenticado, redireciona para a pagina de login

    return false; //retorna false
  }

  private verificarAcesso() {
    if(this.authService.UsuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  };

  canLoad(route: Route): MaybeAsync<any>{
    return this.verificarAcesso();
  }

}