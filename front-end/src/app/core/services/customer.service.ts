import { Injectable } from '@angular/core';
import { ApiHttpClient } from './api.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.class';
@Injectable({
  providedIn: 'root',
})
export class CustomerService extends ApiHttpClient {
  nextUrl: string = null;

  //
  // ==== Behaviors
  //

  private _customers: BehaviorSubject<Customer[]> = new BehaviorSubject<
    Customer[]
  >([]);

  constructor(http: HttpClient) {
    super(http, 'customer');
  }

  //
  // ==== Getters Setters
  //

  get customers$(): Observable<Customer[]> {
    return this._customers.asObservable();
  }

  set customers(value: Customer[]) {
    this._customers.next(value);
  }

  //
  // ==== Methods
  //

  create(body: Customer): Observable<Customer[]> {
    return this.post<Customer[]>('', body).pipe(
      tap((response) => {
        this._customers.next(response);
      })
    );
  }

  getAll(): Observable<Customer[]> {
    return this.get<Customer[]>().pipe(
      tap((response) => {
        this._customers.next(response);
      })
    );
  }

  update(body: Customer): Observable<Customer[]> {
    return this.put<Customer[]>('', body).pipe(
      tap((response) => {
        this._customers.next(response);
      })
    );
  }

  //
  // ==== Private methods
  //
}
