import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'h2[fundoAmarelo]',
  standalone: false
})
export class FundoAmareloDirective {

  constructor(
    private ElementRef: ElementRef,
    private Renderer2: Renderer2
  ) {
    // console.log(this.ElementRef);
    // this.ElementRef.nativeElement.style.backgroundColor = 'yellow';
    this.Renderer2.setStyle(
      this.ElementRef.nativeElement,
      'background-color',
      'yellow'
    )

  }

}
