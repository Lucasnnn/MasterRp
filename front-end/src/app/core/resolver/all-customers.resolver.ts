import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { Customer } from 'src/app/shared/models/customer.class';

@Injectable({
  providedIn: 'root',
})
export class AllCustomersResolver implements Resolve<Customer[]> {
  constructor(private _customerService: CustomerService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Customer[]> {
    return this._customerService.getAll();
  }
}
