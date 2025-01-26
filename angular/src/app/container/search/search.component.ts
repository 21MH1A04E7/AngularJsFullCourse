import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // updateSerachText(event) {
  //   this.searchText = event.target.value;
  // }
  searchText = '';
  @ViewChild('searchInput', {}) searchInputEl: ElementRef;

  @Output() SearchTextChanged: EventEmitter<string> =
    new EventEmitter<string>();
  updateSearchText() {
    this.searchText = this.searchInputEl.nativeElement.value;
    this.SearchTextChanged.emit(this.searchText);
  }
}
