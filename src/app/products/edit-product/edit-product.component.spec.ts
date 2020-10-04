import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { EditProductComponent } from './edit-product.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../services/authentication.service'
import { AuthenticationServiceMock } from 'src/app/services/authentication.mock,service';
import { ProductService } from 'src/app/services/products.service';

describe('EditProductComponent', () => {
  let component: EditProductComponent;
  let fixture: ComponentFixture<EditProductComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProductComponent ],
      imports :[ReactiveFormsModule,FormsModule,HttpClientTestingModule,RouterTestingModule],
      providers:[ {provide:AuthenticationService, useClass:AuthenticationServiceMock},ProductService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
