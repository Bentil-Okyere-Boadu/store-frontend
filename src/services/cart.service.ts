import { Injectable } from '@angular/core';
import { CartItem } from 'src/models/cart_model';
import { Product } from 'src/models/product_model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: CartItem[] = [];
  total: number = 0;

  constructor() {}

  addToCart (product: Product, quantity: number): void {
    const total: number = this._itemTotal(product, quantity)
    
    const item: CartItem = {
      product, quantity, total
    }

    if(this._checkProductIfExistsInCart(product)){
      this.removeProductFromCart(product)
      this.cart.push(item)
    } else {
      this.cart.push(item)
    }
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
    return this.cart
  }

  calculateTotal(): number {
    let grandTotal: number = 0
    this.cart.forEach((item) => grandTotal += item.total)
    return grandTotal
  }

  clearCart(): void {
    this.cart = []
  }

}
