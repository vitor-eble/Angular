import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivs-customizadas',
  standalone: false,
  
  templateUrl: './diretivs-customizadas.component.html',
  styleUrl: './diretivs-customizadas.component.scss'
})
export class DiretivsCustomizadasComponent {

  mostrarCursos: boolean = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }
}
