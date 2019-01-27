import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';

const routes: Routes = [
  {
    path: 'new',
    component : CadastroProdutoComponent
  },
  {
    path: '',
    component : ProductComponent
  },
  {
    path: ':id',
    component : ProductComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
