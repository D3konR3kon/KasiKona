import { Component } from '@angular/core';
import { TopnavComponent } from "../topnav/topnav.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { SearchComponent } from "../search/search.component";
import { LocationComponent } from "../location/location.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [TopnavComponent, FooterNavComponent, SearchComponent, LocationComponent, RouterLink],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
  
}
