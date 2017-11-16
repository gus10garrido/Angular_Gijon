import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';
import { Http } from '@angular/http';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-buscar-httpv',
  templateUrl: './buscar-httpv.component.html',
  styleUrls: ['./buscar-httpv.component.css']
})
export class BuscarHttpvComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public libros: LibrosService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.aLibros = [];
    this.libros.buscar(this.sClave).then(
      (response) => {
          this.aLibros = response;
      }
    );
  }

  btnBuscarRx() {
    this.aLibros = [];
    this.libros.buscarRx(this.sClave).subscribe(
      (response) => {
          this.aLibros = response;
      }
    );
  }

}
