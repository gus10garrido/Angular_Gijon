import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogoComponent],
  exports: [CatalogoComponent]
})
export class CatalogoModule { }
