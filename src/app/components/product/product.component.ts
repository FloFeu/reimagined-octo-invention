import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: '[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  removeProduct(product: Product) {
    // if (product.quantity === 1) {
    //   this.products = this.products.filter(p => p !== product);
    // } else {
    //   product.quantity--;
    // }
    // const id = product.id;
    // this.productsService.deleteProduct(id).subscribe(product => console.log(product));

  }
}
