import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  title = 'demo components';
  @Input() message: string = '';
  @ViewChild('param') paramsEle: ElementRef;
  @ContentChild('demo') demoPara: ElementRef;
  constructor() {
    console.log('constructor is run');
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    // console.log(this.paramsEle.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange life cycle hook run');
    console.log(this.message);
    console.log(changes);
  }
  ngDoCheck() {
    console.log('DoCheck is called');
    console.log(this.demoPara?.nativeElement);
  }
  ngAfterContentInit() {
    console.log('ngAfterViewInt called');
    console.log(this.demoPara.nativeElement);
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
    console.log(this.demoPara.nativeElement);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
