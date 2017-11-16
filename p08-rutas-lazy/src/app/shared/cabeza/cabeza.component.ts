import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cabeza',
  templateUrl: './cabeza.component.html',
  styleUrls: ['./cabeza.component.css']
})
export class CabezaComponent implements OnInit {

  public sTitulo: string;

  constructor() { }

  ngOnInit() {
    this.sTitulo = '8. Rutas-2';
  }

}
