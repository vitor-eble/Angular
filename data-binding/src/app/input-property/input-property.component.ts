import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  standalone: false,

  templateUrl: './input-property.component.html',
  styleUrl: './input-property.component.scss',
  // inputs: ['nomeCurso:nome'],
})
export class InputPropertyComponent {

  @Input('nome') nomeCurso: string = '';


}
