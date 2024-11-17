import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckoutService } from './services/checkout.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'blue_rain';

  constructor(private serviceC: CheckoutService ){}

  ngOnInit(): void {
    // localStorage.removeItem('cart_items')
    // localStorage.removeItem('for')

    //this.getOne()
    // localStorage.removeItem('Total')

  }

 

  

  
}


