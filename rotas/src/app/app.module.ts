import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { Pagina404Component } from './pagina404/pagina404.component';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // CursosModule,
    // AlunosModule,
    AppRoutingModule

  ],
  providers: [AuthService, AuthGuard, CursosGuard, AlunosGuard],
   bootstrap: [AppComponent]
})
export class AppModule { }
