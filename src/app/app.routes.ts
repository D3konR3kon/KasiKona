import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopsComponent } from './components/shops/shops.component';
import { ProductsComponent } from './components/products/products.component';
import { OneProductComponent } from './components/one-product/one-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UnitTypesComponent } from './unit-types/unit-types.component';

export const routes: Routes = [
    { path: '', redirectTo:'home',pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'shops', component: ShopsComponent},
    { path: 'products', component: ProductsComponent},
    { path: 'product/:id', component: OneProductComponent},
    { path: 'cart', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent},
    { path: 'bookings/:id', component:BookingsComponent},
    { path: 'unitype', component: UnitTypesComponent},
    
    
    
    
    
];
