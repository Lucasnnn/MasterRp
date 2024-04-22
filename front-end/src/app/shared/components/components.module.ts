import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { EmptyListComponent } from './empty-list/empty-list.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [EmptyListComponent, ListHeaderComponent, TableComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    InfiniteScrollModule,
    MatButtonModule,
    MatTableModule,
  ],
  exports: [EmptyListComponent, ListHeaderComponent, TableComponent],
})
export class ComponentsModule {}
