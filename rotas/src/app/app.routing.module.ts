import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { Pagina404Component } from "./pagina404/pagina404.component";

// import { CursosComponent } from "./cursos/cursos.component";
// import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
// import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoute: Routes = [
  { path: 'cursos',
    canActivate: [AuthGuard],
    canActivateChild: [CursosGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule )
  },
  { path: 'alunos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule)
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component}
  // { path: 'cursos', component: CursosComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
