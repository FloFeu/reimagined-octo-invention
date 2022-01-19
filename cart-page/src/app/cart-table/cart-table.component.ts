import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { PRODUCTS } from '../../mock/mock-products';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  products: Product[] = PRODUCTS;

  constructor() { }

  ngOnInit(): void {
  }

}
