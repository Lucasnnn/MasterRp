import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.class';
import { CustomerService } from 'src/app/core/services/customer.service';
import { Cols } from 'src/app/shared/components/table/table.component';
import { MatDialog } from '@angular/material/dialog';
import { NovoColaboradorComponent } from './modals/new-customer/novo-colaborador.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  inputSearch = new FormControl('');
  customers$: Observable<Customer[]>;

  colunas: Cols[] = [
    { header: 'Nome', commonKey: 'name', objValue: 'name' },
    { header: 'Email', commonKey: 'email', objValue: 'email' },
    {
      header: 'Celular',
      commonKey: 'telephone',
      objValue: 'telephone',
      format: this.mascaraCell,
    },
  ];

  constructor(
    private _dialog: MatDialog,
    private _customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers$ = this._customerService.customers$;
  }

  mascaraCell(value: any): string {
    if (!value) {
      return '';
    }

    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');

    return value;
  }

  novo(dados: any) {
    const dialogRef = this._dialog.open(NovoColaboradorComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '90vh',
      data: dados,
    });

    dialogRef.afterClosed().subscribe((customer) => {
      if (customer) {
        if (customer?.id) {
          this._customerService.update(customer).subscribe(() => {
            return Swal.fire({
              timer: 4000,
              toast: true,
              icon: 'success',
              timerProgressBar: true,
              showConfirmButton: false,
              text: 'Cliente atualizado com sucesso !',
            });
          });
        } else {
          this._customerService.create(customer).subscribe(() => {
            return Swal.fire({
              timer: 4000,
              toast: true,
              icon: 'success',
              timerProgressBar: true,
              showConfirmButton: false,
              text: 'Cliente criado com sucesso !',
            });
          });
        }
      }
    });
  }
}
