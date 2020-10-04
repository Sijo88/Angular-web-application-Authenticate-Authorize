
import { ComponentFixture} from '@angular/core/testing';
import { TestBed} from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import {ProductService} from '../services/products.service';
import { AuthenticationService } from '../services/authentication.service'
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Userlogin } from '../models/User';
import { AuthenticationServiceMock } from '../services/authentication.mock,service';
import { Product } from '../models/Product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ ProductsComponent ],
      providers:[ {provide:AuthenticationService, useClass:AuthenticationServiceMock},
       ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it("should use the productlist from the service", () => {
    const productService = fixture.debugElement.injector.get(ProductService);
    fixture.detectChanges();
    let productList:Product[];
    productService.getAll().subscribe(products => productList = products)
    expect(productList).toEqual(component.products);
  });
});
