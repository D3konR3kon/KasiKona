import { Component, OnInit } from '@angular/core';
import { TopnavComponent } from "../topnav/topnav.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { SearchComponent } from "../search/search.component";
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [TopnavComponent, FooterNavComponent, SearchComponent, RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  dairyItems: any =[]
  isAdded: any;

  constructor(private productsService: ProductsService, private cartSservice: CartService ){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productsService.getProducts().subscribe({
      next: (res)=>{
        console.log(res)
        this.dairyItems = res.products
      },
      error: (err)=>{
        throw new Error("Could not get products", err)
      }
    })
  }

  addToCart(item: any){
    console.log(item)
    this.cartSservice.addToCart(item)
    this.isAdded = this.cartSservice.getAdded()
  }

}
