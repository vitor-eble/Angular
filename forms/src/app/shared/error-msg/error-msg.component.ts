import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormValidators } from '../form-validators';

@Component({
  selector: 'app-error-msg',
  standalone: false,
  templateUrl: './error-msg.component.html',
  styleUrl: './error-msg.component.css'
})
export class ErrorMsgComponent {

  //@Input() mostrarErro!: any;
  //@Input() msgError!: string;

  @Input() control!: AbstractControl<any> | FormControl<any> | any;
  @Input() label!: string;

  ngOnInit() {

  }

  get ErrorMessage(){
    for ( const propertyName in this.control?.errors){
      if (this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched) {
          return FormValidators.getErrorMessage(this.label, propertyName, this.control.errors[propertyName]);
        }
    }

    return null
  }

}
