import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [HijoComponent, PadreComponent],
  exports: [HijoComponent, PadreComponent]
})
export class MainModule { }
