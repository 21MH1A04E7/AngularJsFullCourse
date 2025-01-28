import { Component, OnInit } from '@angular/core';
import { IDeactivateComponent } from '../Services/auth.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, IDeactivateComponent {
  firstName: string = '';
  lastName: string = '';
  country: string = 'usa';
  message: string = '';
  ngOnInit(): void {}
  isSubmitted: boolean = false;
  OnSubmit() {}
  canExit(): boolean {
    if (this.firstName || this.lastName || this.message || this.isSubmitted) {
      return confirm('You have unsaved changes. Do you want to navigate aways');
    } else {
      return true;
    }
  }
}
