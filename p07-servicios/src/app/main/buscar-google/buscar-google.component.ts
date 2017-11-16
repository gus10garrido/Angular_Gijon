import { Component, OnInit } from '@angular/core';
import { LibrosMockService } from '../../services/libros-mock.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-buscar-google',
  templateUrl: './buscar-google.component.html',
  styleUrls: ['./buscar-google.component.css']
})
export class BuscarGoogleComponent implements OnInit {

  aLibros: Array<string>;
  sClave: string;
  sURL: string;

  constructor(public httpService: Http) { }

  ngOnInit() {
    this.aLibros = [];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  btnBuscar() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.httpService.get(url).toPromise().then(
      (response) => {
        response.json().items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
      }
    );
  }

  btnBuscarRes() {
    this.aLibros = [];
    const url = this.sURL + this.sClave;
    this.httpService.get(url).subscribe(
      (response) => {
        response.json().items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
      }
    );
  }

}
