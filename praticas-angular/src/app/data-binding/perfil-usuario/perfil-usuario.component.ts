import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  standalone: false,

  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.scss'
})
export class PerfilUsuarioComponent {
  nomeUsuario: string = 'Nome Usuario';
  idadeUsuario: string = 'Idade';
  trabalhoUsuario: string = 'Profissão'
  imagemUsuario: string = 'https://angular.io/assets/images/logos/angular/angular.png';
}
