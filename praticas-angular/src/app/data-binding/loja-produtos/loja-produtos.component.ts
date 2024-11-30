import { Component } from '@angular/core';

@Component({
  selector: 'app-loja-produtos',
  standalone: false,

  templateUrl: './loja-produtos.component.html',
  styleUrl: './loja-produtos.component.scss'
})
export class LojaProdutosComponent {
  imagemProduto: string = 'imagemFolder/monitor.png';
  nomeProduto: string = 'Notebook Gaymer';
  precoProduto: number = 5000;
  estoqueProduto: number = 12;

  mudarValor(){
    this.estoqueProduto--;
  }
}
