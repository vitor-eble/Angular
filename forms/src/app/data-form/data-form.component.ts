import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  this.formulario = new FormGroup({
    nameInput: new FormControl(null),
    emailInput: new FormControl(null)
  });

    //? segunda forma de criar formulario
    /* this.formulario = this.formBuilder.group({
      nameInput: [null],
      emailInput: [null]
    }) */

  }

}
