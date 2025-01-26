import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackgroundDirective {
  //   private element: ElementRef;
  //   private renderer;
  @Input() backColor: string = 'yellow';
  @Input() textColor: string = 'white';
  constructor(private element: ElementRef, private renderer: Renderer2) {
    //instance of span element
    // this.element = element;
    // this.renderer = renderer;
  }
  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor = 'red';
    // this.element.nativeElement.style.color = 'white';

    //using renderer
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.backColor
    ); //it will create abstraction
    this.renderer.setStyle(this.element.nativeElement, 'color', this.textColor); //we not directly accessing the dom element
    // this.renderer.setAttribute(
    //   this.element.nativeElement,
    //   'title',
    //   'this is title '
    // );
  }
}
