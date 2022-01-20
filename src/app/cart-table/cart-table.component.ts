import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products);
  }

  removeProduct(product: Product): void {
    this.products = this.products.filter(p => p !== product);
  }

}
