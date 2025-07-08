import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-error',
  standalone: false,
  templateUrl: './campo-control-error.component.html',
  styleUrl: './campo-control-error.component.css'
})
export class CampoControlErrorComponent {

  @Input() mostrarErro!: any;
  @Input() msgError!: string;

  @Input() mostrarValido!: Boolean | string;
  @Input() msgValido!: string;

}
