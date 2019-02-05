import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, ModalModule, TooltipModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './core/cart/cart.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CartModule,
    SharedModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
