import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { RelogioDinamicoComponent } from './relogio-dinamico/relogio-dinamico.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { LojaProdutosComponent } from './loja-produtos/loja-produtos.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    PerfilUsuarioComponent,
    RelogioDinamicoComponent,
    SemaforoComponent,
    LojaProdutosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataBindingComponent,

  ]
})
export class DataBindingModule { }
