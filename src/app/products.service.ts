import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from 'src/mock/mock-products';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products';

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
  
}
