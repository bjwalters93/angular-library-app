import { Component, input, OnInit } from '@angular/core';
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
import { RouterLink } from '@angular/router';

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
    TagModule,
    RouterLink,
  ],
})
export class BooksTableComponent implements OnInit {
  books!: Book[];
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

  setStatus(book: Book) {
    let status = {
      severity: '',
      text: '',
    };
    if (book.availableCopies == 0) {
      status.severity = 'danger';
      status.text = 'Unavailable';
      return status;
    } else {
      status.severity = 'success';
      status.text = 'Available';
      return status;
    }
  }

  onRowSelect(event: any) {
    // console.log('Event:', event.data);
  }

  onRowUnselect(event: any) {
    // console.log('Event:', event.data);
  }
}
