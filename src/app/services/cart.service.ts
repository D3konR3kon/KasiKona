import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemcount = new BehaviorSubject<number>(0);
  favList = new BehaviorSubject<number>(0)
  public cartTotal = new BehaviorSubject<number>(0);
  wishList:any[] = []
  items: any[] = [];
  isAddedToCart: Boolean = false


  totalAmount=0;


  constructor() { }

  addToCart(product: any ) {
      
    const productExistInCart = this.items.find(({name}) => name === product.name); // find product by name
    if (!productExistInCart) {
    this.items.push({...product, quantity: 1}); 
    this.isAddedToCart = true
    this.cartItemcount.next(this.cartItemcount.value + 1);
    console.log(this.items, this.cartItemcount.value)
    localStorage.setItem('for', JSON.stringify(this.items))
    return;
   }

    productExistInCart.quantity = productExistInCart.quantity + 1;
    this.cartItemcount.next(this.cartItemcount.value + 1);
    console.log(this.items, this.cartItemcount.value)
}
  addToWishlist(product: any){
    const productAlready = this.wishList.find(({title}) => title === product.title); // find product by name
    if (!productAlready) {
      this.wishList.push(product); 
      // this.wishList.length;
      this.favList.next(this.favList.value + 1);
      console.log(this.favList.value)
      localStorage.setItem('for', JSON.stringify(this.items))
      return;
    }else{
      console.log("Product already Exist!")
    }
  }

    Total() {
    
      this.totalAmount = 0
      this.items.forEach((item:any) => {
        this.totalAmount += (item.price * item.quantity)
        //this.cartTotal.next(this.totalAmount);
        console.log(this.cartTotal)
        localStorage.setItem('Total',JSON.stringify(this.totalAmount))
      })
      
      this.cartTotal.next(this.totalAmount);
      localStorage.setItem('for', JSON.stringify(this.items))
      
    }
    getItems(): any[] {

      return this.items;
    }

    getWishilist():any[]{
      return this.wishList;
    }

    getAdded(){
      return this.isAddedToCart;
    }
}
