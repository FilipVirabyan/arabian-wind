import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {
  }

  getAllProducts(params: HttpParams): Observable<Product[]> {
    const url = `${environment.baseUrl}products`;
    return this._http.get<Product[]>(url, {params});
  }

  getProductById(id: string, lang: string): Observable<Product> {
    const url = `${environment.baseUrl}products/${id}?lang=${lang}`;
    return this._http.get<Product>(url);
  }

  getLanguages(): Observable<Product[]> {
    const url = `${environment.baseUrl}language-code`;
    return this._http.get<Product[]>(url);
  }

  sendEmail(message: any): Observable<any> {
    const url = `${environment.baseUrl}contact-us/send`;
    return this._http.post<any>(url, message);
  }
}
