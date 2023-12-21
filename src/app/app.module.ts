import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { RouterOutlet, provideRouter } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AppComponent,SearchBarComponent, PageListComponent],
  imports: [CommonModule, BrowserModule, HttpClientModule, RouterOutlet],
  bootstrap: [AppComponent],
  providers: [provideRouter(routes)]
})
export class AppModule { }
