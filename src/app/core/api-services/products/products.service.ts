import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) {
  }

  getAllProducts(limit: number, offset: number): Observable<any> {
    const url = `${environment.baseUrl}products?offset=${offset}&limit=${limit}`;
    return this._http.get(url);
  }
}
