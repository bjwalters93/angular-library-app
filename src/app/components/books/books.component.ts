import { Component, signal } from '@angular/core';
import { BooksTableComponent } from '../books-table/books-table.component';
import { ViewBookComponent } from '../view-book/view-book.component';
import { NewBookComponent } from '../new-book/new-book.component';

@Component({
  selector: 'app-books',
  imports: [BooksTableComponent, ViewBookComponent, NewBookComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {
  viewBookVisibility = signal(false);
  newBookVisibility = signal(false);
  bookId = signal(0);
}
