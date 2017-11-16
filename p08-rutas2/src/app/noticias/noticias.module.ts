import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoticiasComponent],
  exports: [NoticiasComponent]
})
export class NoticiasModule { }
