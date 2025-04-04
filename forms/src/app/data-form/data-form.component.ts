import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {

  this.formulario = new FormGroup({
    nameInput: new FormControl(null, [
      Validators.required
    ]),
    emailInput: new FormControl(null, [
      Validators.required,
      Validators.email
    ]),
    endereco: new FormGroup({
      cepInput: new FormControl(null, [
        Validators.required
      ]),
      numeroInput: new FormControl(null, [
        Validators.required
      ]),
      complementoInput: new FormControl(null),
      ruaInput: new FormControl(null, [
        Validators.required
      ]),
      bairroInput: new FormControl(null, [
        Validators.required
      ]),
      cidadeInput: new FormControl(null, [
        Validators.required
      ]),
      estadoInput: new FormControl(null, [
        Validators.required
      ]),
    })


    //validator.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //Validators.minLength(3), Validators.maxLength(20)
  });

    //? segunda forma de criar formulario
    /* this.formulario = this.formBuilder.group({
      nameInput: [null],
      emailInput: [null]
    }) */

  }

  onSubmit(form: any){
    console.log(form);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
    .pipe(
      map(res => res)
    )
    .subscribe((dados: any) => {
      console.log(dados);
      //reseta o formulario
      // this.resetar()
      //this.formulario.reset()
    },
    (error: any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset()
  }

  verificaValidTouched(campo: string): boolean{
    return this.formulario.get(campo)?.invalid && this.formulario.get(campo)?.touched || false
  }

  verificaEmailInvalido(){
    let campoEmail = this.formulario.get('emailInput')
    if(campoEmail?.errors){
      return campoEmail.errors['email'] && campoEmail.touched
    }
  }

  aplicaCssErro(campo: string){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feeback': this.verificaValidTouched(campo)
    }
  }

}
