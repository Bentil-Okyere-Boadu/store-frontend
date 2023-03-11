import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from 'src/models/cart_model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product: CartItem
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter()

  constructor(){
    this.product = {
      product:{
        id: 0,
        description: "",
        price: 0,
        url: '',
        name: ''
      },
      quantity: 0,
      total: 0
    }
  }

}
