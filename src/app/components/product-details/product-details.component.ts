import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/models/product_model';
import { ProductService } from 'src/services/product.service';
import { FormControl } from '@angular/forms';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  id: number = 0;
  quantity = new FormControl(0);
  product: Product = {
    id: 0,
    description: "",
    price: 0,
    url: '',
    name: ''
  }

  constructor(private router: ActivatedRoute, private productService: ProductService, private cartService: CartService) {
    this.router.params.subscribe( params => {
      this.id = params['id']
    })    
  }

  ngOnInit(): void { 
    const index = this.id
    this.product = this.productService.getProducts()[index-1]
  }

  addToCart(): void{
    this.cartService.addToCart(this.product, this.quantity.value || 0)
  }
}
