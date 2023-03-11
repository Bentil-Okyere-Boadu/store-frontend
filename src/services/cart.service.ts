import { Injectable } from '@angular/core';
import { CartItem } from 'src/models/cart_model';
import { Product } from 'src/models/product_model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];
  total: number = 0;

  constructor(private router: Router, private toastr: ToastrService){}

  addToCart (product: Product, quantity: number): void {
    const total: number = this._itemTotal(product, quantity)
    
    const item: CartItem = {
      product, quantity, total
    }

    if(quantity > 0){
      if(this._checkProductIfExistsInCart(product)){
        this.removeProductFromCart(product)
        this.cart.push(item)
        this.toastr.success('Product has been added to cart.')
      } else {
        this.cart.push(item)
        this.toastr.success('Product has been added to cart.')
      }
    } else{
      this.toastr.error('Product quantity cannot be 0')
    }

    this.calculateTotal()
  }

  private _itemTotal (product: Product, quantity: number): number {
    return product.price * quantity
  }

  viewCart(): CartItem[] {
    return this.cart
  }

  private _checkProductIfExistsInCart (product: Product) : boolean {
    return this.cart.some((item) => item.product.id === product.id)
  }

  removeProductFromCart(product: Product): CartItem[] {
    const index: number = this.cart.findIndex(item => item.product.id === product.id)
    this.cart.splice(index, 1)
    this.calculateTotal()
    this.toastr.success('Product has been removed from cart.')
    return this.cart
  }

  calculateTotal(): number {
    let grandTotal: number = 0
    this.cart.forEach((item) => grandTotal += item.total)
    this.total = grandTotal
    return grandTotal
  }

  clearCart(): void {
    this.cart = []
  }

  confirmOrder(): void {
    if(this.cart.length > 0){
      this.router.navigate(['/confirmation'])
      this.clearCart()
    }
    else {
      this.toastr.error('Could not place order, cart is empty.')
    }
  }

}
