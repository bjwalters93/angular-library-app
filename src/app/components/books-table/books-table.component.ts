import { Component, inject, model } from '@angular/core';
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
import { generateStatus } from '../../Utils/status.utils';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';

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
    AsyncPipe,
    InputGroup,
    InputGroupAddonModule,
    DividerModule,
  ],
})
export class BooksTableComponent {
  books$!: Observable<Book[]>;
  viewBookVisibility = model(false);
  newBookVisibility = model(false);
  bookId = model(0);
  private bookService = inject(BookService);
  skeltonArray = Array.from({ length: 15 }).map((_, i) => `Item #${i}`);

  constructor() {
    // this.books$ = this.bookService.getBooks();
    this.myMethod();
  }

  myMethod() {
    setTimeout(() => {
      this.books$ = this.bookService.getBooks();
    }, 500);
  }

  setStatus(book: Book) {
    return generateStatus(book);
  }

  viewBook(id: number) {
    this.bookId.set(id);
    this.viewBookVisibility.set(true);
  }

  newBook() {
    this.newBookVisibility.set(true);
    console.log('new book button works!');
  }
}
