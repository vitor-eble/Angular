import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,

  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent implements OnInit {

  url: string = 'htpp://loiane.com';
  cursoAngular: boolean = true;

  urlImagem: string = 'https://picsum.photos/400/200';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  getValor() {
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botao clicado');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor(){ }

  ngOnInit() {

  }

}
