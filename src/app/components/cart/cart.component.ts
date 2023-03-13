import { Component } from '@angular/core';
import { CartItem } from 'src/models/cart_model';
import { CartService } from 'src/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: CartItem[]
  total: number= this.cartService.calculateTotal()
  name: string = ''
  address: string = ''
  accNo!: number

  constructor(private cartService: CartService, private router: Router){
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
  }

  cancelOrder() {
    this.cartService.clearCart()
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
    this.router.navigate(['/'])
  }

  confirmOrder(){
    this.cartService.confirmOrder()
  }

  removeProduct(product: CartItem) {
    this.cartService.removeProductFromCart(product.product)
    this.total = this.cartService.calculateTotal()
  }

  nameChanged(value: string){
     this.name = value
  }

  addressChanged(value: string){
    this.address = value
  }

  accChanged(value: number){
    this.accNo = value
  }
}
