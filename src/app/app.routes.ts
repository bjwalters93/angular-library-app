import { Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { PatronsComponent } from './components/patrons/patrons.component';
import { LoansComponent } from './components/loans/loans.component';
import { BooksSearchComponent } from './components/books-search/books-search.component';
import { PatronsSearchComponent } from './components/patrons-search/patrons-search.component';
import { NewPatronComponent } from './components/new-patron/new-patron.component';
import { NewLoanComponent } from './components/new-loan/new-loan.component';

export const routes: Routes = [
  { path: 'books', component: BooksComponent },
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full',
  },
  { path: 'patrons', component: PatronsComponent },
  { path: 'patrons/new', component: NewPatronComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'loans/new', component: NewLoanComponent },
  { path: 'books/search', component: BooksSearchComponent },
  { path: 'patrons/search', component: PatronsSearchComponent },
];
