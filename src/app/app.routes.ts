import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PatronsComponent } from './patrons/patrons.component';
import { LoansComponent } from './loans/loans.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { PatronsSearchComponent } from './patrons-search/patrons-search.component';
import { NewBookComponent } from './new-book/new-book.component';
import { NewPatronComponent } from './new-patron/new-patron.component';
import { NewLoanComponent } from './new-loan/new-loan.component';

export const routes: Routes = [
  // Books Collection
  {
    path: 'books',
    component: BooksComponent,
  },
  { path: 'books/new', component: NewBookComponent },
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
