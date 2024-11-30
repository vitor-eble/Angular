import { Component } from '@angular/core';

@Component({
  selector: 'app-loja-produtos',
  standalone: false,

  templateUrl: './loja-produtos.component.html',
  styleUrl: './loja-produtos.component.scss'
})
export class LojaProdutosComponent {
  imagemProduto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnQdywvgp8J0q9hhHdFvM3GOVrxajsGSFTw&s';
  nomeProduto: string = 'Notebook';
  precoProduto: number = 5000;
  estoqueProduto: number = 12;

  mudarValor(){
    this.estoqueProduto = this.estoqueProduto > 0 ? this.estoqueProduto - 1 : 0;
  }
}
