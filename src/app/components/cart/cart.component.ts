import { Component, OnChanges, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cart_model';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges, OnInit {
  cart: CartItem[]
  total: number

  constructor(private cartService: CartService){
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
  }

  ngOnInit(): void {
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
  }

  ngOnChanges(): void{
    this.total = this.cartService.calculateTotal()
  }

  cancelOrder() {
    this.cartService.clearCart()
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
  }
}
