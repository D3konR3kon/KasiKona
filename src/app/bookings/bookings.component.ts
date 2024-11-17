import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CheckoutService } from '../services/checkout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  id!: number
  bookings = []
  filtered = []

  constructor(private serviceC: CheckoutService, private route: ActivatedRoute ){}

  ngOnInit(): void {
    // localStorage.removeItem('cart_items')
    // localStorage.removeItem('for')
    
    this.getBookings()
    this.getRoute()
    //this.getOne()
    // localStorage.removeItem('Total')

  }

  getBookings(){
    this.serviceC.getAllBookings().subscribe({
      next:(value)=>{
        console.log("e", value.payload['Booking Units'])
        this.bookings = value.payload['Booking Units']
        this.filter(this.id)
        
      },
      error(err) {
        if(err.error_code === 0) console.log(err)
      },
    })
  }

  getRoute(){
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(Number(this.id))
    

  }

  filter(id:any){
    console.log("ererer fris", id)
    this.filtered = this.bookings.filter((booking: any)=>{
      const res = booking['Unit Type ID'] === id
      return res
    })
    console.log("sdsdsdsd", this.filtered)
  }
}
