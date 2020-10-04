import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './interceptor/jwt.intercepter';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { CommonModule } from '@angular/common';  
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
