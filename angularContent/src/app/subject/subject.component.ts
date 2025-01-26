import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // let obs = new Observable((observer) => observer.next(Math.random()));
    // obs.subscribe((data) => console.log(data));
    // obs.subscribe((data) => console.log(data));

    //subject is multicasting it wil emit the smae value
    // let subject = new Subject();
    // subject.subscribe((data) => console.log(data));
    // subject.subscribe((data) => console.log(data));
    // subject.next(Math.random());

    //three api call is going to made (observable)
    // const data = ajax('https://jsonplaceholder.typicode.com/users');

    // data.subscribe((res) => console.log(res));
    // data.subscribe((res) => console.log(res));
    // data.subscribe((res) => console.log(res));

    //in case of subject
    const sub = new Subject();
    const data = ajax('https://jsonplaceholder.typicode.com/users');

    sub.subscribe((res) => console.log(res));
    sub.subscribe((res) => console.log(res));
    sub.subscribe((res) => console.log(res));
    data.subscribe(sub); //consumer
  }
  // https://jsonplaceholder.typicode.com/users
}
