import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { AllCustomersResolver } from 'src/app/core/resolver/all-customers.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: {
      customer: AllCustomersResolver,
    },
    component: CustomerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
