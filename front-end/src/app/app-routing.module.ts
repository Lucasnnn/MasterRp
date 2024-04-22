import { NgModule } from '@angular/core';
import { PagesRouting } from './pages/routing';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'customer' },
  {
    path: '',
    component: LayoutComponent,
    children: PagesRouting,
  },
  //
  { path: '**', pathMatch: 'full', redirectTo: 'customer' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
