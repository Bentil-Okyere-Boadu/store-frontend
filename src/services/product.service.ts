import { Injectable } from '@angular/core';
import { Product } from 'src/models/product_model';
import * as jsonData from '../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]
  constructor() { 
    let data = Object.create(null)
    data = {...jsonData}
    this.products = data.default
  }

  getProducts() {
    return this.products;
  }

  getProduct(id: number) {
    const product = this.products.find(function (prod) { 
      return prod.id === id
    })
   
    return product
  }

}
