import { Component } from '@angular/core';
import { BooksTableComponent } from '../books-table/books-table.component';

@Component({
  selector: 'app-books',
  imports: [BooksTableComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent {}
