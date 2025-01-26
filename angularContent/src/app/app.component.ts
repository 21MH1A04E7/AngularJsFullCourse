import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularContent';
  inputVAl = '';
  buttonClick(inputEl: HTMLInputElement) {
    this.inputVAl = inputEl.value;
  }
  toDestroy: boolean = true;
  DestroyComponent() {
    this.toDestroy = !this.toDestroy;
  }
}
