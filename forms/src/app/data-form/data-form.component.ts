import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { DropdownService } from '../shared/services/dropdown.service';
import { Estadobr } from '../shared/models/estado-br';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup;
  estados: Estadobr[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService
  ) { }

  ngOnInit() {

    this.dropdownService.getEstadosBr().subscribe((dados: any) => {
      this.estados = dados;
      console.log(dados);
    });

    this.formulario = this.formBuilder.group({
      nameInput: [null, Validators.required],
      emailInput: [null, Validators.required],
      endereco: this.formBuilder.group({
        cepInput: [null, Validators.required],
        numeroInput: [null, Validators.required],
        complementoInput: [null, Validators.required],
        ruaInput: [null, Validators.required],
        bairroInput: [null, Validators.required],
        cidadeInput: [null, Validators.required],
        estadoInput: [null, Validators.required]
      })
    });

    // this.formulario = new FormGroup({
    //   nameInput: new FormControl(null, [
    //     Validators.required
    //   ]),
    //   emailInput: new FormControl(null, [
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   endereco: new FormGroup({
    //     cepInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //     numeroInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //     complementoInput: new FormControl(null),
    //     ruaInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //     bairroInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //     cidadeInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //     estadoInput: new FormControl(null, [
    //       Validators.required
    //     ]),
    //   })


    //validator.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //Validators.minLength(3), Validators.maxLength(20);

  }

  onSubmit(form: any) {
    console.log(form);

    if (this.formulario.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(
          map(res => res)
        )
        .subscribe(
          (dados: any) => {
            console.log(dados);
            //reseta o formulario
            // this.resetar()
            //this.formulario.reset()
          },
          (error: any) => alert('erro')
        );
    } else {
      console.log('formulario inválido');
      this.verificaValidacoesForm(this.formulario)
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formGroup.get(campo);
      controle?.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cepInput')?.value;
    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
        .subscribe((dados: any) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any) {
    this.formulario.patchValue({
      endereco: {
        //cepInput: dados.cep,
        complementoInput: dados.complemento,
        ruaInput: dados.logradouro,
        bairroInput: dados.bairro,
        cidadeInput: dados.localidade,
        estadoInput: dados.uf
      }
    });

    // this.formulario.get('nameInput')?.setValue('Lucas');
  }

  resetaDadosForm() {
    this.formulario.patchValue({
      endereco: {
        //cepInput: dados.cep,
        complementoInput: null,
        ruaInput: null,
        bairroInput: null,
        cidadeInput: null,
        estadoInput: null,
      }
    });
  }

  resetar() {
    this.formulario.reset()
  }

  verificaValidTouched(campo: string): boolean {
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched || false
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('emailInput')
    if (campoEmail?.errors) {
      return campoEmail.errors['email'] && campoEmail.touched
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feeback': this.verificaValidTouched(campo)
    }
  }

}
