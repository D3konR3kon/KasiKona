import { Component, OnInit } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { ActivatedRoute, RouterLink, } from '@angular/router';
import { ProductsService } from '../../services/products.service';

import { CommonModule, Location } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [FooterNavComponent, RouterLink, CommonModule],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css'
})
export class OneProductComponent implements OnInit {

  constructor(private productService: ProductsService, private cartSservice: CartService, private activatedRoute: ActivatedRoute, private location : Location ){}
  product:any
  isAdded:any;


  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)
    this.productService.getOne(id).subscribe({
      next: (res_data: any)=>{
        console.log(res_data)
        this.product= res_data.products
      },
      error: (err)=>{
        throw new Error('Could not get item', err)
      }
    })

  }

  goBack(){
    this.location.back()
  }

  addToCart(item: any){
    console.log(item)
    this.cartSservice.addToCart(item)
    this.isAdded = this.cartSservice.getAdded()
  }


}
