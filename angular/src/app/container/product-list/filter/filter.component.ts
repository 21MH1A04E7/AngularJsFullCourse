import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input()
  all: number = 0;
  @Input()
  inStock: number = 0;
  @Input()
  outOfStock: number = 0;
  @Output() selectedFilterRadioButtonChange: EventEmitter<string> =
    new EventEmitter<string>();
  selectedFilterRadioButton: string = 'all';
  onSelectedFilterRadioButtonChange() {
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);
  }
}
