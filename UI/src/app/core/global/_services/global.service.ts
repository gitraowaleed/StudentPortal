import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { filter, some, find, each } from 'lodash';
import { environment } from '../../../../environments/environment';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import { Logout } from '../../auth';
import { AuthHelper } from '../_helpers/auth.helper';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  webTitle: string = environment.webTitle;
  httpHeaders: any;
  constructor(private http: HttpClient, private store: Store<AppState>, private authHelper: AuthHelper) {
    this.httpHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('authce9d77b308c149d5992a80073637e4d5'),
      'Content-Type': 'application/json'
    });
  }

  getEndPoint(endPoint) {
    return API_URL + endPoint;
  }

  getAll(endPoint: string): Observable<any> {
    return this.http.get(this.getEndPoint(endPoint), this.authHelper).pipe(
      map((result: any) => {
        return result;
      }),
      catchError(err => {
        if (err.status === 401) {
          this.store.dispatch(new Logout());
        }
        return of("Z");
      }));
  }


  updateModel(endPoint, model): Observable<any> {
    return this.http.post(this.getEndPoint(endPoint), model, this.authHelper).pipe(
      map((result: any) => {
        return result;
      }),
      catchError(err => {
        if (err.status === 401) {
          this.store.dispatch(new Logout());
        }
        return of("Z");
      }));
  }



}
