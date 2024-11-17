import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../services/checkout.service';
import { CommonModule } from '@angular/common';
import { error } from 'console';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-unit-types',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './unit-types.component.html',
  styleUrl: './unit-types.component.css'
})
export class UnitTypesComponent implements OnInit {

  constructor( private serviceC: CheckoutService){}
  units=[]
  
  ngOnInit(): void {
    this.getUnit()
    //this.getOne()


  }

  id = "'0200000044B400800000000000000000'"
  getUnit(){
    this.serviceC.getUnitId().subscribe({
      next: (value: any)=>{
      console.log(value.payload)
      this.units= value.payload['Unit Types']
    }, error: (err)=>{
      console.log(err)
    }
  })
  }

  // getOne(){
    
  //   this.serviceC.getImages(this.id).subscribe({
  //     next(value) {
  //       console.log("image", value)
  //     },
  //   })
  // }

}
