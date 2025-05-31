import { Routes } from '@angular/router';

export const routes: Routes = [
  // Books Collection
  { path: 'books', component: FirstComponent },
  { path: 'books/new', component: SecondComponent },
  { path: 'books/:id', component: SecondComponent },
  { path: 'books/:id/edit', component: SecondComponent },
  //   Patrons Collection
  { path: 'patrons', component: SecondComponent },
  { path: 'patrons/new', component: SecondComponent },
  { path: 'patrons/:id', component: SecondComponent },
  //   Loans Collection
  { path: 'loans', component: SecondComponent },
  { path: 'loans/new', component: SecondComponent },
  { path: 'loans/overdue', component: SecondComponent },
  //   Search with query parameters
  { path: 'books/search', component: SecondComponent },
  { path: 'patrons/search', component: SecondComponent },
];
