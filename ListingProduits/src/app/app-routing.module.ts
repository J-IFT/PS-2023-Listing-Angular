import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductCreateFormComponent } from './product-create-form/product-create-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: 'product-list', component: ProductListPageComponent },
  { path: 'product/create', component: ProductCreateFormComponent },
  { path: 'product/:id', component: ProductDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }