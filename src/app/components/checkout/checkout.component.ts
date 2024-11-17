import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  totalAmount = JSON.parse(`${localStorage.getItem('Total')}`) | 0
  cart: any
  items: any
  date= new Date()
  customer={
    name: "Vuyo",
    last_name: "Dila",
    contact_no: "067 123 4567",
    email: "example@gmail.com",
    // dob: {  type: Date, require: true},
    // id_number: { type: String, required: true, unique: true, index: true, match: /^[0-9]{13}$/,},
    address: {
      street: "5200 Joe Slovo Crescent",
      surbub: "Weltevreden Valley North",
      city: "Cape town",
      postal_code: "7785",
    },
  }


  tot = 0
  constructor(private cartService: CartService, private router: Router){}

  ngOnInit(): void {
    this.cart = JSON.parse(`${localStorage.getItem('cart_items')}`)
   
    
     this.totalAmount
     this.getOrder()
  }

  getOrder(){

    console.log(this.cart)

    // this.orderService.fetchAnOrder(this.cart).subscribe({
    //   next: (cart:any)=>{
    //     this.items = cart
    //     this.date = new Date(this.items[0].createdAt)
    //     this.customer = this.items[0].userId
    //     console.log( cart )
    //   },
    //   error: (err: any)=>{
    //     console.error("An error occured while feetching order", err)
    //   }
    // })

  }

  
  clearOrder(){
    localStorage.removeItem('cart_items')
    localStorage.removeItem('for')
    localStorage.removeItem('Total')
    
    this.cartService.items = []
    this.cartService.cartTotal.next(0);
    this.cartService.cartItemcount.next(0)
    setTimeout(()=>{
      this.router.navigateByUrl('/home')
    }, 500)

    }
    
  }

