import { Component, Input } from '@angular/core';
import { Product } from 'src/product_model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product

  constructor(){
    this.product = {
      id: 0,
      description: '',
      price: 0,
      name: '',
      url: ''
    }
  }
}
