import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      numero: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  }

  onSubmit(form: any){
    console.log(form);
    // console.log(this.usuario);
  }

  isInvalid(input: NgModel){
    return input.invalid && input.touched;
  }
}
