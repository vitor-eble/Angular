import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: false
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = this.hightlightColor
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = this.defaultColor
  }

  @HostBinding('style.backgroundColor') backgroundColor?: string;

  @Input() defaultColor: string = 'white';
  @Input('highlight') hightlightColor: string = 'yellow';

  constructor( ) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }

}
