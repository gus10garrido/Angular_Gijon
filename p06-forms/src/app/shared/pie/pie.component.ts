import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public sAutor: string;
  public sLugar: string;

  constructor() { }

  ngOnInit() {
    this.sAutor = 'Gustavo Garrido';
    this.sLugar = 'Gijón';
  }

}
