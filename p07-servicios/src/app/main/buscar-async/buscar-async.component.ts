import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';

@Component({
  selector: 'app-buscar-async',
  templateUrl: './buscar-async.component.html',
  styleUrls: ['./buscar-async.component.css']
})
export class BuscarAsyncComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;

  constructor(public librosMockService: LibrosMockService) { }

  ngOnInit() {
    this.aLibros = [];
  }

  btnBuscar() {
    this.librosMockService.buscarLibrosAsync(this.sClave)
    .then(JSON.parse)
    .then(
      // function ok
      (response) => {
        this.aLibros = response;
      }
      ,
      // function ko
      (error) => { console.log(error); }
    );
  }

}
