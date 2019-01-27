import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductRoutingModule } from './product-routing.module';
import {ProductItemDescriptionComponent} from './product-description/product-item-description.component';
import {ItensCountComponent} from './itens-count/itens-count.component';
import {ButtomComponent} from './buttom/buttom.component';
import {TabPanelComponent} from './tab-panel/tab-panel.component';
import {TabComponent} from './tab/tab.component';
import {ImagesGaleryComponent} from './images-galery/images-galery.component';
import {CardComponent} from './card/card.component';
import {CarouselComponent} from './carousel/carousel.component';
import {DescontoComponent} from './desconto/desconto.component';
import {CadastroProdutoComponent} from './cadastro-produto/cadastro-produto.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SlickModule} from 'ngx-slick';

@NgModule({
  declarations: [
    ProductComponent,
    ProductItemDescriptionComponent,
    ItensCountComponent,
    ButtomComponent,
    TabPanelComponent,
    TabComponent,
    ImagesGaleryComponent,
    CardComponent,
    CarouselComponent,
    DescontoComponent,
    CadastroProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SlickModule.forRoot(),
  ]
})
export class ProductModule { }
