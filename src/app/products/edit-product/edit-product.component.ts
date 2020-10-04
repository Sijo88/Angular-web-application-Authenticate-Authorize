import { Component, OnInit } from '@angular/core';
import {Userlogin} from '../../models/User';
import { AuthenticationService } from '../../services/authentication.service'
import {ProductService} from '../../services/products.service'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router'
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  currentUser: Userlogin;
  editForm: FormGroup;
  productid: string;
  isShown: boolean = false ; // hidden by default

  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,private productService:ProductService,private router:Router) {
    this.currentUser=this.authenticationService.CurrentUserValue;
    if(this.currentUser==null)
    this.router.navigate(['']);
    this.productid= window.localStorage.getItem("editProductId");
    
   }
isShownButton(){
  if(this.currentUser.role=="Admin")
  this.isShown = true;
  else
  this.isShown =false;
return this.isShown;
}
  ngOnInit() {
    this.productService.getById(this.productid)
      .subscribe( data => {
        this.editForm.setValue(data);
      });
    this.editForm = this.formBuilder.group({
      id: [''],
      title: ['', Validators.required],
      modelName : ['', Validators.required],
      productType :['', Validators.required],
      
      
    });
  }
  onSubmit() {
    this.productService.UpdateProduct(this.editForm.value)
    .subscribe(
      data => {
        if(data) {
          alert('Product updated successfully.');
          this.router.navigate(['product']);
          
        }else {
          alert("Failure");
        }
      },
      error => {
        alert(error);
      });
  }
  


}
