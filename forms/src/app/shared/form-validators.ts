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
}