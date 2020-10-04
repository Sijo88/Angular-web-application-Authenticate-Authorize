import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { ReactiveFormsModule } from '@angular/forms';
import {AuthenticationService} from './services/authentication.service'
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        ProductsComponent,
        LoginComponent,
        EditProductComponent
      ],
      providers:[AuthenticationService]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
});
