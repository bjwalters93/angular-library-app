import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../services/book.service';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-books-table',
  templateUrl: 'books-table.component.html',
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule],
})
export class BooksTableComponent implements OnInit {
  books!: Book[];
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

  //   getSeverity(status: string) {
  //     switch (status) {
  //       case 'INSTOCK':
  //         return 'success';
  //       case 'LOWSTOCK':
  //         return 'warn';
  //       case 'OUTOFSTOCK':
  //         return 'danger';
  //     }
  //   }
}
