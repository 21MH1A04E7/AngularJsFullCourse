import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appAppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroundColor: string = 'blue'; //we can bind the dom property
  @HostBinding('style.border') border: string = 'black 2px solid';
  @HostBinding('stye.color') textColor: string = 'white';
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
    this.textColor = 'white';
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }
}
