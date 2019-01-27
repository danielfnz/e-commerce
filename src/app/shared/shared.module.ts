import { Pipes } from './pipes/_pipes';
import { Components } from './components/_components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './services/_services';
import { SlickModule } from 'ngx-slick';
import { RouterModule } from '@angular/router';
import { VirgulaPipe } from './pipes/virgula.pipe';

@NgModule({
  declarations: [Components, Pipes, VirgulaPipe],
  imports: [
    CommonModule,
    SlickModule.forRoot(),
    RouterModule,
  ],
  providers : [Services],
  exports: [Components, Pipes, VirgulaPipe],
})
export class SharedModule { }
