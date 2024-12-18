import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  standalone: false,

  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss'
})
export class OutputPropertyComponent {
  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput!: ElementRef;


  incrementa(){
    this.campoValorInput.nativeElement.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa(){
    this.campoValorInput.nativeElement.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor(){
  }
}
