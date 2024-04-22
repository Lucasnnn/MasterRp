import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [ProductRoutingModule, ComponentsModule, CommonModule],
})
export class ProductModule {}
