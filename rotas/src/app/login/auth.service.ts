import { EventEmitter, Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true)
      this.route.navigate(['/'])

    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false)
    }
  }

  UsuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
