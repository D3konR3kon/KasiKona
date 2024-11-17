import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Carousel from 'flowbite/lib/esm/components/carousel';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  
  @ViewChild('carousel', { static: false }) carouselElem!: ElementRef 
    
  ngAfterViewInit(): void {
    if (this.carouselElem) {
      new Carousel(this.carouselElem.nativeElement);
    }
  }

}


