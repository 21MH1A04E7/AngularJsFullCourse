import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
} from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.css'],
})
export class BehaviorSubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let subject = new BehaviorSubject(542);
    // subject.subscribe((data) => console.log(data));
    // subject.subscribe((data) => console.log(data));

    /*
    let behaviorSubject = new BehaviorSubject(345);
    behaviorSubject.subscribe((data) => console.log('sub 1 ' + data));
    behaviorSubject.subscribe((data) => console.log('sub 2 ' + data));
    behaviorSubject.next(200);
    behaviorSubject.subscribe((data) => console.log('sub 3 ' + data));
    behaviorSubject.next(300);
    behaviorSubject.subscribe((data) => console.log('sub 4 ' + data));

    */
    const subject = new ReplaySubject(2); //(bufferSize,time)

    subject.next(100);
    subject.next(200);
    subject.next(300);

    // Subscriber 1
    subject.subscribe((data) => {
      console.log('Subscriber 1:' + data);
    });

    // Subscriber 2
    subject.subscribe((data) => {
      console.log('Subscriber 2:' + data);
    });

    subject.next(2020);

    // Subscriber 3
    subject.subscribe((data) => {
      console.log('Subscriber 3:' + data);
    });

    subject.next(2023);

    console.log('----------');

    const asyncSubject = new AsyncSubject();

    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.complete();
    asyncSubject.next(500);
    asyncSubject.complete();

    asyncSubject.subscribe((data) => console.log(`Subscribe 1: ${data}`));

    asyncSubject.next(400);
    asyncSubject.subscribe((data) => console.log(`Subscribe 2: ${data}`));

    console.log('promise vs observable');

    const promise = new Promise((resolve, reject) => {
      console.log('promise resolve');
      resolve('');
    });
    const observable = new Observable((observar) => {
      console.log('observable');
      observar.next('');
    });
    // observable.subscribe();
  }
}
