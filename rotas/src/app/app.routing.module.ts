import { NgModule } from "@angular/core";

import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';
import { LoginComponent } from "./login/login.component";
import { AppModule } from "./app.module";

// import { CursosComponent } from "./cursos/cursos.component";
// import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
// import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";

const appRoute: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent  },
  { path: 'login', component: LoginComponent},
  // { path: 'cursos', component: CursosComponent },
  // { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
