import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalculadoraComponent implements OnInit {

  nNumero: number;
  oColores: any;
  constructor() { }

  ngOnInit() {
    this.nNumero = 0;
    this.actualizaColores();
  }

  sumaUno() {
    this.nNumero++;
    this.actualizaColores();
  }

  restaUno() {
    this.nNumero--;
    this.actualizaColores();
  }

  actualizaColores() {
    this.oColores = {positivo: this.nNumero >= 0,
                      negativo: this.nNumero < 0};
  }

}
