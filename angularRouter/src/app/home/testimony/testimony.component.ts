import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css'],
})
export class TestimonyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  testimonials: string[] = [
    'Avery Holmes',
    'Craig Ramirez',
    'Landon Stephens',
    'Leah Ward',
  ];
}
