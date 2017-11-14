import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <img [src]="sLogo" class="img-fluid">
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class LogoComponent implements OnInit {

  public sLogo: string;

  constructor() { }

  ngOnInit() {
    this.sLogo = '../../../assets/angular-logo.svg';
  }

}
