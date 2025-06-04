import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-books-table',
  templateUrl: 'books-table.component.html',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
  ],
})
export class BooksTableComponent implements OnInit {
  books!: Book[];
  //   You can use the selected book property to programmatically select any row...currently it's doing nothing.
  // You could create a method, combine it with search, and update the property to manually select rows.
  //   selectedBook!: Book;
  selectedBook!: Book;
  loading: boolean = false;
  error: string | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.loading = true;
    this.error = null; // Clear previous errors
    this.bookService.getBooks().subscribe({
      next: (data: Book[]) => {
        console.log(data);
        this.books = data;
        this.loading = false;
      },
      error: (err: Error) => {
        this.error = err.message;
        this.loading = false;
        console.error('Failed to fetch books:', err);
      },
    });
  }

  selectedBookRow(book: Book) {
    console.log('Book:', book);
  }

  onRowSelect(event: any) {
    console.log('Event:', event.data);
  }

  onRowUnselect(event: any) {
    console.log('Event:', event.data);
  }
}
