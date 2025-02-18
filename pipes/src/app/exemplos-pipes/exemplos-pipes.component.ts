import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  standalone: false,
  templateUrl: './exemplos-pipes.component.html',
  styleUrl: './exemplos-pipes.component.css'
})
export class ExemplosPipesComponent {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2', 'TypeScript'];

  filtro: string = ''

  addCurso(valor: any){
    this.livros.push(valor);
    console.log(this.livros);

  }

}
