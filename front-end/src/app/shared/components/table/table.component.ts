import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

export interface Cols {
  header: string;
  commonKey: string;
  objValue: string;
  format?: (value: any) => any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() colunas: Cols[] = [];
  @Input() dados: BehaviorSubject<any> = new BehaviorSubject(null);

  @Output() novo = new EventEmitter();

  lines = [];
  format = {};
  clickable = false;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  constructor() {}

  ngOnInit(): void {
    this.lines = this.colunas?.map((colu) => {
      if (colu.format) {
        this.format[colu?.objValue] = colu.format;
      }

      return colu.objValue;
    });

    this.dados.subscribe((dados) => {
      this.dataSource.data = dados;
    });

    this.clickable = this.novo.observed;
  }

  getValue(item: any, objKey: string) {
    const key = objKey;

    const value = key
      .split('.')
      .reduce((o, k) => (o && o[k] ? o[k] : ''), item);

    const func = this.format[objKey];

    if (func) {
      const clean = func(value);

      return clean;
    }

    return value;
  }

  edit(item?: any) {
    this.novo.emit(item);
  }
}
