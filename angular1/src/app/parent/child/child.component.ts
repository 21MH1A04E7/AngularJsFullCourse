import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ContentChild('param') ParagraphEl: ElementRef;
  @ContentChild(TestComponent) testEl: TestComponent;

  @ContentChildren('param') ParaElement: QueryList<ElementRef>;

  @ContentChildren(TestComponent) textElement: QueryList<TestComponent>;

  StyleParagraph() {
    // console.log(this.ParagraphEl.nativeElement);
    // console.log(this.testEl.name);
    this.ParaElement.forEach((val) => console.log(val.nativeElement));
    this.textElement.forEach((val) => console.log(val));
  }
}
