import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  standalone: false
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    // this.renderer2.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'yellow'
    // )

    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    // this.renderer2.setStyle(
    //   this.elementRef.nativeElement,
    //   'background-color', 'white'
    // )
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  constructor(
    // private elementRef: ElementRef, private renderer2: Renderer2
  ) { }

}
