import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickModule } from 'ngx-slick';

import { SharedModule } from './../../shared/shared.module';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImagesGaleryComponent } from './images-galery/images-galery.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [
    ProductComponent,
    CarouselComponent,
    TabPanelComponent,
    TabComponent,
    ImagesGaleryComponent,
    CadastroProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SlickModule.forRoot(),
  ],
  providers: []
})
export class ProductModule { }
