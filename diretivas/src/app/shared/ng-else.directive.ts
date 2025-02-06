import { Directive, Input,
  TemplateRef, ViewContainerRef
 } from '@angular/core';

@Directive({
  selector: '[ngElse]',
  standalone: false
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if(!condition){
      this._ViewContainerRef.createEmbeddedView(this._TemplateRef)
    } else {
      this._ViewContainerRef.clear();
    }
  }

  constructor(
    private _TemplateRef: TemplateRef<any>,
    private _ViewContainerRef: ViewContainerRef
  ) { }

}
