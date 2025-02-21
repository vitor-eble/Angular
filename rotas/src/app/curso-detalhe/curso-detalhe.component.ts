import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  standalone: false,
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.css'
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  id: string = '';
  inscricao: Subscription = new Subscription()

  constructor(private route: ActivatedRoute) {
    // this.id = this.route.snapshot.params['id'];
    // console.log(this.route);
  }

  ngOnInit() {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     this.id = params['id']
    //   }
    // );

    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
