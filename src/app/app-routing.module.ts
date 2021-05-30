import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookShelvesComponent } from './components/book-shelves/book-shelves.component';
import { SearchBooksComponent } from './components/search-books/search-books.component';

const routes: Routes = [
  { path: '', redirectTo: 'book-shelves', pathMatch: 'full' },
  { path: 'book-shelves', component: BookShelvesComponent },
  { path: 'search-books', component: SearchBooksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
