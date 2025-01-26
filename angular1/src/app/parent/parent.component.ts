import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @ViewChild('param') ParaEle: ElementRef;
  show() {
    console.log(this.ParaEle.nativeElement);
  }
}
