import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { filter, from, fromEvent, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  data: any[] = [];
  array1: any[] = ['1', '2', '3', '4', '5'];
  array2: any[] = ['a', 'b', 'c', 'd'];
  constructor() {}
  @ViewChild('creatbutton') createBtn: ElementRef;
  /*
  Myobservable = new Observable((observe) => {
    setTimeout(() => {
      observe.next(1);
    }, 1000);
    setTimeout(() => {
      observe.next(2);
    }, 2000);
    setTimeout(() => {
      observe.next(3);
    }, 3000);
    // setTimeout(() => {
    //   observe.error('someting went wrong');
    // }, 4000);
    setTimeout(() => {
      observe.next(5);
    }, 5000);
    setTimeout(() => {
      observe.next(6);
    }, 6000);
    setTimeout(() => {
      observe.complete();
    }, 7000);
  });*/

  OfObservable = of(this.array1, this.array2);
  FromObservable = from(this.array1);
  onObserverfun() {
    // this.Myobservable.subscribe({
    //   next: (val) => this.data.push(val),
    //   error: () => alert('someting went wrong'),
    //   complete: () => alert('all the data is stream'),
    // });
    // this.OfObservable.subscribe({
    //   next: (val) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: () => alert('someting went wrong'),
    //   complete: () => alert('all the data is stream'),
    // });
    this.FromObservable.subscribe({
      next: (val) => {
        this.data.push(val);
        console.log(val);
      },
      error: (err) => alert('someting went wrong'),
      complete: () => alert('all the data is stream'),
    });
    // this.promsieObservabe.subscribe({
    //   next: (val) => {
    //     this.data.push(val);
    //     console.log(val);
    //   },
    //   error: (err) => alert('someting went wrong'),
    //   complete: () => alert('all the data is stream'),
    // });
  }
  //create a promize
  promiseData = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50]);
  });
  promsieObservabe = from(this.promiseData); //best way to convet the promsie into observable
  ngOnInit(): void {}

  createButtonObservable;
  // it wil take two argument
  //target element , event
  /*
  onButtonClicked() {
    let count = 0;
    if (!this.createButtonObservable) {
      this.createButtonObservable = fromEvent(
        this.createBtn.nativeElement,
        'click'
      ).subscribe({
        next: (val) => {
          this.showDiv(++count);
          console.log(val);
        },
      });
    }
  }
  ngAfterViewInit() {
    this.onButtonClicked();
  }
  showDiv(count: number | string | null) {
    const createDiv = document.createElement('div');
    createDiv.innerText = `item ${count}`;
    if (createDiv) document.getElementById('container').appendChild(createDiv);
  }
  ngOnDestroy() {
    if (this.createButtonObservable) {
      this.createButtonObservable.unsubscribe();
    }
  }*/

  // it wil returen the observable after transforming the data
  observable1 = from([1, 2, 3, 4, 5]);

  transformObservable = this.observable1.pipe(
    map((val: number) => val * 2),
    filter((val) => val % 4 === 0)
  );
  // .pipe(filter((val) => val % 4 === 0));
  onClick() {
    this.transformObservable.subscribe({
      next: (val: number) => console.log(val),
    });
  }
}
