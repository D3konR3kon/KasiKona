import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild,  } from '@angular/core';
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { TopnavComponent } from "../topnav/topnav.component";
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from "../categories/categories.component";
import { SearchComponent } from "../search/search.component";
import { LocationComponent } from "../location/location.component";
import Carousel from 'flowbite/lib/esm/components/carousel';
import { FlowbiteService } from '../../services/flowbite.service';
import { CheckoutService } from '../../services/checkout.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterNavComponent, CarouselComponent, TopnavComponent, RouterLink, CategoriesComponent, SearchComponent, LocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private flowbiteService: FlowbiteService, private checkoutServ: CheckoutService) {}
  bookings: any
  ngOnInit(): void {
    
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
    
    localStorage.removeItem('cart_items')
    localStorage.removeItem('for')
    localStorage.removeItem('Total')
    // this.getBookingData()
  }

  getBookingData(){
    
    this.checkoutServ.getAllBookings().subscribe({
      next: (res_data)=>{
        //localStorage.length
        console.log("Bookings Data Retrieved!! ",res_data)
        this.bookings = res_data.error_code
      },
      error: (err)=>{
        console.error("Could get bookings!", err)
        
      }
      
    })
  }
}
