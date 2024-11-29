import { Component } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  standalone: false,

  templateUrl: './semaforo.component.html',
  styleUrl: './semaforo.component.scss'
})
export class SemaforoComponent {

  corLampada: string = 'red';

  mudarCor(){

    if(this.corLampada === 'red') {
      this.corLampada = 'yellow';
    } else if (this.corLampada === 'yellow') {
      this.corLampada = 'green';
    } else if (this.corLampada === 'green') {
      this.corLampada = 'red';
    }
  }

}
