import { Component } from '@angular/core';

@Component({
  selector: 'meu-primeiro-component',
  standalone: false,
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.scss'
})
export class MeuPrimeiroComponent {
  text: string = "Meu primeiro component com angular";
}
