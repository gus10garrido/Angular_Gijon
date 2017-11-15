import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { ListaV4Component } from './lista-v4/lista-v4.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MainComponent, ListaComponent, ListaV4Component, CalculadoraComponent],
  exports: [MainComponent]
})
export class MainModule { }
