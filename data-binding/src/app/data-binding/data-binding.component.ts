import { Component, OnInit } from '@angular/core';

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

  getValor() {
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  constructor(){ }

  ngOnInit() {

  }
}
