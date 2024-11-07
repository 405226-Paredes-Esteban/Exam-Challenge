import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly httpClient= inject(HttpClient);
  private readonly baseUrl = "http://localhost:3000/products";

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl);
  }
}
