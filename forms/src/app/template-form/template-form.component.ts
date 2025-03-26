import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  usuario: any = {
    nome: 'vitor',
    email: 'vitor@email.com'
  }

  onSubmit(form: any){
    console.log(form);
    console.log(this.usuario);

  }
}
