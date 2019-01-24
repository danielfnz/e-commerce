import { Pipes } from './pipes/_pipes';
import { Components } from './components/_components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './services/_services';
import { SlickModule } from 'ngx-slick';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Components, Pipes],
  imports: [
    CommonModule,
    SlickModule.forRoot(),
    RouterModule,
  ],
  providers : [Services],
  exports: [Components, Pipes],
})
export class SharedModule { }
