import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDisableProducts]',
})
export class DisableProductsDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @Input('appDisableProducts') set disableProduct(disable: boolean) {
    if (disable) {
      this.renderer.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
