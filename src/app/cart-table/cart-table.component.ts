import { Component } from '@angular/core';
import { Product } from 'src/models/product';
import { PRODUCTS } from '../../mock/mock-products';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent  {
  products: Product[] = PRODUCTS;

  removeItem(product: Product): void {
    this.products = this.products.filter(p => p !== product);
  }

  calculateTotalPrice() {
    
  }
}
