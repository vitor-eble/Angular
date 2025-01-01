import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: false,

  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  cursos: string[] = ['angular'];

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos
  }
}
