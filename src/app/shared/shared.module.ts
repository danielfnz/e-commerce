import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlickModule } from 'ngx-slick';

import { Components } from './components/_components';
import { Pipes } from './pipes/_pipes';
import { VirgulaPipe } from './pipes/virgula.pipe';
import { Services } from './services/_services';
import { CarouselModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [Components, Pipes, VirgulaPipe],
  imports: [
    CommonModule,
    SlickModule.forRoot(),
    RouterModule,
    CarouselModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers : [Services],
  exports: [Components, Pipes, VirgulaPipe],
})
export class SharedModule { }
