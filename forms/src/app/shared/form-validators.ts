import { AbstractControl, ValidationErrors, ValidatorFn, FormArray } from '@angular/forms';
export class FormValidators {

  static  requiredMinCheckbox(min: number = 1): ValidatorFn{
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
    if(cep != null && cep !== ''){
      const cepPattern = /^[0-9]{5}-[0-9]{3}$/;
      return cepPattern.test(cep) ? null : { cepInvalido: true }
    }

    return null;
  }
}