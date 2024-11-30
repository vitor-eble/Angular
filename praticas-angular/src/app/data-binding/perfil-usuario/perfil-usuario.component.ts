import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  standalone: false,

  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.scss'
})
export class PerfilUsuarioComponent {
  NomeUsuario: string = 'Nome Usuario';
  IdadeUsuario: string = 'Idade';
  TrabalhoUsuario: string = 'Profissão'
  ImagemUsuario: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
