import { Component } from '@angular/core';
import { Product } from 'src/models/product_model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[]
  constructor(private productService: ProductService){
    this.products = this.productService.getProducts()
  }

  getProducts(){
    return this.products
  }

}
