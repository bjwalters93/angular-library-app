import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Skeleton } from 'primeng/skeleton';

@Component({
  selector: 'app-books-table',
  templateUrl: 'books-table.component.html',
  standalone: true,
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    Skeleton,
    TagModule,
    RouterLink,
    AsyncPipe,
  ],
})
export class BooksTableComponent {
  books$!: Observable<Book[]>;
  private bookService = inject(BookService);
  skeltonArray = Array.from({ length: 15 }).map((_, i) => `Item #${i}`);
  selectedBook!: Book;

  constructor() {
    // this.books$ = this.bookService.getBooks();
    this.myMethod();
  }

  myMethod() {
    setTimeout(() => {
      this.books$ = this.bookService.getBooks();
    }, 500);
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
