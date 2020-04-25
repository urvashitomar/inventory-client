import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl='http://localhost:9090/ims/api/products';
  constructor(private http: HttpClient) { }

  getProductsList():Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
  getProduct(id: number): Observable<any> {
return this.http.get(`${this.baseUrl}/${id}`);
}

newProduct(product: Object): Observable<Object> {
  return this.http.post(`${this.baseUrl}`, product);
  }
updateProduct(id:number, value:any) :Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`, value);
}
deleteProduct(id:number) :Observable<any>{
  return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
}
}
