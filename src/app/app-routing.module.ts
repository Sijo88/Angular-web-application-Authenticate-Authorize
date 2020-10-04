import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import {ProductsComponent} from './products/products.component'

const routes: Routes = [{ path: 'product', component: ProductsComponent},
{ path: '', component: LoginComponent },
{ path: 'editproduct', component: EditProductComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
