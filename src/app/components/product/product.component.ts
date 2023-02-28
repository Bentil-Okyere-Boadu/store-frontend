import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/models/product_model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product
  quantity = new FormControl(0)

  constructor(private cartService: CartService){
    this.product = {
      id: 0,
      description: '',
      price: 0,
      name: '',
      url: ''
    }

    this.quantity.setValue(0)
  }

  addToCart():void {
    this.cartService.addToCart(this.product, this.quantity.value || 0)
  }

  
}
