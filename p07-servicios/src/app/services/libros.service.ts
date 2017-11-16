import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LibrosService {

  sURL: string;
  aLibros: Array<string>;

  constructor(public httpService: Http) {
    this.aLibros = [];
    this.sURL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  buscar(clave: string) {
    this.aLibros = [];
    const url = this.sURL + clave;
    return this.httpService.get(url).toPromise().then(
      (response) => {
        response.json().items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
        return this.aLibros;
      }
    );
  }

  buscarRx(clave: string) {
    const url = this.sURL + clave;
    return this.httpService.get(url).map(
          response => this.extractTitles(response),
          error => console.log(error)
        );
  }

  private extractTitles(response: Response) {
    if (response.json().items) {
      return response.json().items.map(book => book.volumeInfo.title);
    } else {
      return response;
    }
  }

}
