import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  standalone: false,

  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.scss'
})
export class PerfilUsuarioComponent {
  NomeUsuario: string = 'Vitor Eble da Silva';
  IdadeUsuario: string = '18 anos';
  TrabalhoUsuario: string = 'Desenvolver Front-End'
  ImagemUsuario: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
