import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor() {}
  product: Product;
  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct;
  }
  @Input() productListComp: ProductListComponent;
}
