import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

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

  constructor(
    private http: HttpClient,
    private cepService: ConsultaCepService
  ) { }

  onSubmit(form: any){
    console.log(form);
    // console.log(this.usuario);

    this.http.post('enderecoServer/formUsuario', JSON.stringify(form.value))
    .pipe(
      map(res => res)
    )
    .subscribe((dados: any) => console.log(dados));
  }

  verificaValidTouched(campo: NgModel): boolean{
    return campo.invalid && campo.touched || false
  }

  aplicaCssErro(campo: NgModel){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feeback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any){
    cep = cep.replace(/\D/g, '');
    if(cep != null && cep !== ''){
      this.cepService.consultaCEP(cep)
        .subscribe((dados: any) => this.populaDadosForm(dados, form));
    }
  }

  populaDadosForm(dados: any, formulario: any){
    /*formulario.setValue({ //setValue é utilizado para setar valores em todos os campos
      nameInput: formulario.value.nameInput,
      emailInput: formulario.value.emailInput,
      endereco: {
        cepInput: dados.cep,
        numeroInput: '',
        complementoInput: dados.complemento,
        ruaInput: dados.logradouro,
        bairroInput: dados.bairro,
        cidadeInput: dados.localidade,
        estadoInput: dados.uf
      }
    });*/

    formulario.form.patchValue({ //patchValue é utilizado para setar valores em campos específicos
      endereco: {
        //cepInput: dados.cep,
        complementoInput: dados.complemento,
        ruaInput: dados.logradouro,
        bairroInput: dados.bairro,
        cidadeInput: dados.localidade,
        estadoInput: dados.uf
      }
    });
  }

  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        complementoInput: null,
        ruaInput: null,
        bairroInput: null,
        cidadeInput: null,
        estadoInput: null
      }
    });
  }
}
