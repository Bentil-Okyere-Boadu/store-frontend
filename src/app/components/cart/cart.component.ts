import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartItem } from 'src/models/cart_model';
import { CartService } from 'src/services/cart.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges, OnInit {
  cart: CartItem[]
  total: number= this.cartService.calculateTotal()
  name = new FormControl()
  address = new FormControl()
  accNo = new FormControl()

  constructor(private cartService: CartService, private router: Router){
    this.cart = this.cartService.viewCart()
    this.total = this.cartService.calculateTotal()
  }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {

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
}
