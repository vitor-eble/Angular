import { Component } from '@angular/core';

@Component({
  selector: 'app-relogio-dinamico',
  standalone: false,

  templateUrl: './relogio-dinamico.component.html',
  styleUrl: './relogio-dinamico.component.scss'
})
export class RelogioDinamicoComponent {

  horaAtual = new Date().toLocaleTimeString();

  updateTime(){
    this.horaAtual = new Date().toLocaleTimeString();
  }

}
