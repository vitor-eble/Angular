import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule,
  ],
  providers: [CursosService],
  bootstrap: [AppComponent],
})
export class AppModule { }
