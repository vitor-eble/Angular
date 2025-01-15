import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  standalone: false,

  templateUrl: './diretiva-ngfor.component.html',
  styleUrl: './diretiva-ngfor.component.scss'
})
export class DiretivaNgforComponent implements OnInit {
  cursos: string[] = ['angular 2', 'Java', 'python', 'tailwind', 'HTML'];

  ngOnInit(){
    for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }
  }
}
