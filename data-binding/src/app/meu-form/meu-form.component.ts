import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  standalone: false,

  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.scss'
})
export class MeuFormComponent {
  nome:string = 'abc'

  pessoa:any = {
    name: 'vitor',
    age: 18,
  }
}
