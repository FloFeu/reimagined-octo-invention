import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products';
  
  constructor(
    private http: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error(error);
          return throwError(() => new Error());
        })
      );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.productsUrl}/${id}`)
  }

}
