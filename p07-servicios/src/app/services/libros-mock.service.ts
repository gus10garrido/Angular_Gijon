import { Injectable } from '@angular/core';

@Injectable()
export class LibrosMockService {

  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular Easy',
      'Angular Medium',
      'Angular Advanced'
    ];
  }

  buscarLibro(clave: string) {
    return this.aLibros;
  }

}
