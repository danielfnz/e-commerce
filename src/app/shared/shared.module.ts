import { Pipes } from './pipes/_pipes';
import { Components } from './components/_components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Services } from './services/_services';

@NgModule({
  declarations: [Components, Pipes, Services],
  imports: [
    CommonModule
  ],
  exports: [Components, Pipes, Services],
})
export class SharedModule { }
