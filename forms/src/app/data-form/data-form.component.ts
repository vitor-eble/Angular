import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  standalone: false,
  templateUrl: './data-form.component.html',
  styleUrl: './data-form.component.css'
})
export class DataFormComponent {

  formulario!: FormGroup

  ngOnInit(){

    this.formulario = new FormGroup({
      nome: new FormControl('Loiane')
    });

  }

}
