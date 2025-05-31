import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { PatronsComponent } from './patrons/patrons.component';
import { LoansComponent } from './loans/loans.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { PatronsSearchComponent } from './patrons-search/patrons-search.component';

export const routes: Routes = [
  // Books Collection
  {
    path: 'books',
    component: BooksComponent,
  },
  //   Patrons Collection
  { path: 'patrons', component: PatronsComponent },
  //   { path: 'patrons/new', component: SecondComponent },
  //   { path: 'patrons/:id', component: SecondComponent },
  //   Loans Collection
  { path: 'loans', component: LoansComponent },
  //   { path: 'loans/new', component: SecondComponent },
  //   { path: 'loans/overdue', component: SecondComponent },
  //   Search with query parameters
  { path: 'books/search', component: BooksSearchComponent },
  { path: 'patrons/search', component: PatronsSearchComponent },
];
