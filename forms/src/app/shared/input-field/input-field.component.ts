import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true,
}

@Component({
  selector: 'app-input-field',
  standalone: false,
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers: [INPUT_FIELD_ACCESSOR]
})
export class InputFieldComponent implements ControlValueAccessor {

  @Input() classeCss!: any;
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() control!: any
  @Input() isReadOnly: any = false;
  @Input() placeholder!: string;

  private innerValue: any;

  get value() {
    return this.innerValue
  }

  set value(valor: any){
    if (valor !== this.innerValue) {
      this.innerValue = valor;
      this.onChangeCb(valor);
    }
  }

  constructor() {

  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(valor: any): void {
    if(valor !== this.innerValue) {
      this.innerValue = valor;
      this.onChangeCb(valor);
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

}
