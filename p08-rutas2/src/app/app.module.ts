import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.module';
import { appRouting } from './app-routing';
import { CatalogoModule } from './catalogo/catalogo.module';
import { AutoresModule } from './autores/autores.module';
import { NoticiasModule } from './noticias/noticias.module';
import { AboutModule } from './about/about.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    SharedModule,
    appRouting,
    CatalogoModule,
    AutoresModule,
    NoticiasModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
