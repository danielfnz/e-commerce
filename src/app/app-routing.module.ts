import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'cart',
    loadChildren: './core/cart/cart.module#CartModule'
  },
  {
    path: 'checkout',
    loadChildren: './core/checkout/checkout.module#CheckoutModule'
  },
  {
    path: 'product',
    loadChildren: './core/product/product.module#ProductModule'
  },
  {
    path: 'category',
    loadChildren: './core/category/category.module#CategoryModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
