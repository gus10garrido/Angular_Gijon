import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { LibrosMockService } from './services/libros-mock.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    LibrosMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
