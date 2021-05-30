import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookShelvesComponent } from './components/book-shelves/book-shelves.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';

@NgModule({
  declarations: [AppComponent, BookShelvesComponent, SearchBooksComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
