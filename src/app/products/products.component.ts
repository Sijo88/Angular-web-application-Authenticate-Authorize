import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import {Userlogin} from '../models/User'
import {ProductService} from '../services/products.service';
import { AuthenticationService } from '../services/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  currentUser: Userlogin;
  isShown : boolean = false;
  products:Product[];
  constructor(private productService:ProductService, private authenticationService: AuthenticationService,  private router: Router) {
    this.currentUser=this.authenticationService.CurrentUserValue;
    if(this.currentUser==null)
    this.router.navigate(['']);
   }
   isShownButton(){
    if(this.currentUser.role=="Admin")
    this.isShown = true;
    else
    this.isShown =false;
  return this.isShown;
  }
  ngOnInit() {
    this.loadAllProducts();

  }
  public loadAllProducts() {
    return this.productService.getAll()
    .subscribe(products => this.products = products);
}
 public EditProduct(product)
 {
  this.router.navigate(['editproduct']);
  window.localStorage.setItem("editProductId",product.id);
  
 }
}
