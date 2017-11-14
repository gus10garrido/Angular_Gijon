import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExpresionesComponent implements OnInit {

  public sName: string;
  public nValor: number;

  constructor() { }

  ngOnInit() {
    this.sName = 'Pepe';
    this.nValor = 7;
  }

}
