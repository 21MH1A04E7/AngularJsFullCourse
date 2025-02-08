import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  router: Router = inject(Router);

  course: any;
  ngOnInit(): void {
    this.course = history.state;
    // console.log(this.course);
  }
}
