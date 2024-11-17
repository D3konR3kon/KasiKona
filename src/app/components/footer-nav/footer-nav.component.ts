import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.css'
})
export class FooterNavComponent {
  favListCount$ = new BehaviorSubject<number>(0);
  cartCount$ = new BehaviorSubject<number>(0)
  isEmpty=true
  fcolor= '#e01219'

  constructor(private productService: ProductsService, private cartService: CartService, private route : Router) { }
  

  

  ngOnInit(): void {
    this.favListCount$ = this.cartService.favList
    this.cartCount$ = this.cartService.cartItemcount
    
  }

  goHome(){
    this.route.navigateByUrl("/home")
  }
}
