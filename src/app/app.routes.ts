import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { PatronsComponent } from './components/patrons/patrons.component';
import { LoansComponent } from './components/loans/loans.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { PatronsSearchComponent } from './components/patrons-search/patrons-search.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { NewPatronComponent } from './components/new-patron/new-patron.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

export const routes: Routes = [
  // Books Collection
  {
    path: 'books',
    component: BooksComponent,
  },
  { path: 'books/new', component: NewBookComponent },
  { path: 'books/:id', component: ViewBookComponent },
  //   Patrons Collection
  { path: 'patrons', component: PatronsComponent },
  { path: 'patrons/new', component: NewPatronComponent },
  //   Loans Collection
  { path: 'loans', component: LoansComponent },
  { path: 'loans/new', component: NewLoanComponent },
  //   Search with query parameters
  { path: 'books/search', component: BooksSearchComponent },
  { path: 'patrons/search', component: PatronsSearchComponent },
];
