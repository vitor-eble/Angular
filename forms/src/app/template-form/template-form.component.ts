import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

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

  consultaCEP(cep: any){
    cep = cep.replace(/\D/g, '');

    if(cep != ""){
      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){

        // this.http.get min = 10:23
      }
    }

  }
}
