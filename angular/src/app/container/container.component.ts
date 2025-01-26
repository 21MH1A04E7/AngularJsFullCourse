import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductComponent } from './product-list/product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addToCart: number = 0;
  @ViewChild(ProductListComponent) productListComponent: ProductComponent;
  searchText = '';
  setSearchText(value: any) {
    this.searchText = value;
  }
}
