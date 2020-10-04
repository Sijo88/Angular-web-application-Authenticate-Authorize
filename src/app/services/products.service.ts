import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/Product'
import { environment } from '../../environments/environment';

@Injectable({providedIn : 'root'})
export class ProductService{
    private baseurl:string
    constructor(private http: HttpClient) {
        this.baseurl = environment.baseUrl;
     }

    getAll() {
        return this.http.get<Product[]>(`${this.baseurl}/products`);
    }
    getById(id){
        return this.http.get<Product>(`${this.baseurl}/products/GetById/${id}`)
    }
    UpdateProduct(product){
        return this.http.put<Product>(`${this.baseurl}/products`,product);
    }
}