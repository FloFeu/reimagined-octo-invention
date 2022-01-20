import { Injectable } from '@angular/core';
import { filter, Observable, of } from 'rxjs';
import { PRODUCTS } from 'src/mock/mock-products';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
  
}
