import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http: HttpClient) {
  }

  login(data: any): Observable<any> {
    const url = `${environment.baseUrl}/login`;
    return this._http.post<any>(url, data);
  }
}
