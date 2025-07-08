import { AbstractControl, ValidationErrors, ValidatorFn, FormArray, FormGroup, FormControl } from '@angular/forms';
export class FormValidators {

  static requiredMinCheckbox(min: number = 1): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formArray = control as FormArray;
      const totalChecked = formArray.controls
        .map((v: any) => v.value)
        .reduce((total: any, current: any) => current ? total + 1 : total, 0);
      return totalChecked >= min ? null : { required: true };
    };
  }


  static cepValidator(control: AbstractControl): ValidationErrors | null {

    const cep = control.value;
    if (cep != null && cep !== '') {
      const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
      return cepPattern.test(cep) ? null : { cepInvalido: true }
    }
    return null;
  }

  static equalsTo(otherField: string): any {
    const validator = (formControl: FormControl) => {
      if(otherField == null) {
        throw new Error('É necessário informar um campo');
      }
      if(!formControl.root || (<FormGroup>formControl.root).controls == null) {
        return null;
      }
      const field = (<FormGroup>formControl.root).get(otherField);
      if(!field){
        throw new Error('É necessário informar um campo válido');
      }
      if(field.value !== formControl.value) {
        return { equalsTo: otherField };
      }
      return null;
    }

    return validator
  }

  static getErrorMessage(fieldName: string, validatorName: string, validatorValue?: any) {
    const config : any = {
      'required': `${fieldName} é obrigatorio`,
      'minlength': `${fieldName} deve ter no minimo ${validatorValue.requiredLength} caracteres`,
      'cepInvalido': 'CEP invalido',
    }

    return config[validatorName]
  }
}
