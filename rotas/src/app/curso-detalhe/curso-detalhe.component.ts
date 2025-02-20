import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  standalone: false,
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent {

  id: string = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id']

  }
}
