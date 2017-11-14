import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, ListaComponent],
  exports: [MainComponent]
})
export class MainModule { }
