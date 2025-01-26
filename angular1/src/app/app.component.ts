import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular1';
  fullName: string = '';
  // @ViewChild('inputEl') inputElement: ElementRef;

  // ViewChildren decorator to get references to all input elements with #inputE1
  @ViewChildren('inputEl') inputElements: QueryList<ElementRef>;
  show() {
    let name = '';
    this.inputElements.forEach((el) => {
      name += el.nativeElement.value;
    });
    this.fullName = name.trim();
  }
}
