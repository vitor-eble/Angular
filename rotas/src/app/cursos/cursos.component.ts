import { Component, OnDestroy, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  standalone: false,
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos!: any[];
  pagina!: number;
  inscricao: Subscription = new Subscription();

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    )
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  nextPage(){
    this.router.navigate(['/cursos'], {
      queryParams: {'pagina': ++this.pagina}
    });
  }

}
