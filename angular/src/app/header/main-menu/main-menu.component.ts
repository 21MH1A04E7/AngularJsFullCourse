import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mainMenuItems: string[] = [
    'Home',
    'Products',
    'Sale',
    'New Arrival',
    'Contact',
  ];
}
