import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input('appClass') set dispaly(value: Object) {
    let obj = Object.entries(value);
    for (let item of obj) {
      let [className, condition] = item;
      if (condition)
        this.renderer.addClass(this.element.nativeElement, className);
    }
  }
}
