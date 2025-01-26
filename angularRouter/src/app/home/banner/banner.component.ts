import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onSearchClick(inputele: HTMLInputElement) {
    // console.log(inputele);
    console.log(inputele.value);
    this.router.navigate(['/Courses'], {
      queryParams: {
        search: inputele.value,
      },
    });
  }
}
