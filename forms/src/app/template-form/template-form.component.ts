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
  }

  onSubmit(form: any){
    console.log(form);
    // console.log(this.usuario);
  }

  verificaValidTouched(campo: NgModel){
    return campo.invalid && campo.touched
  }

  aplicaCssErro(campo: NgModel){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feeback': this.verificaValidTouched(campo)

    }
  }

}
