import { Component, inject, model, OnInit } from '@angular/core';
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
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { genres } from '../../Utils/genres.utils';
import { Genre } from '../../interfaces/genre.interface';

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
    InputGroupAddonModule,
    DividerModule,
    SelectModule,
    ReactiveFormsModule,
  ],
})
export class BooksTableComponent implements OnInit {
  books$!: Observable<Book[]>;
  viewBookVisibility = model(false);
  newBookVisibility = model(false);
  bookId = model(0);
  searchForm!: FormGroup;
  searchTypes!: string[];
  genres!: Genre[];
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

  onSubmit() {
    if (this.searchForm.value.searchType === 'Isbn') {
      this.books$ = this.bookService.getBookByIsbn(
        this.searchForm.value.searchTerm
      );
    }
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchType: new FormControl(),
      searchTerm: new FormControl(),
    });
    this.searchTypes = ['Isbn', 'Title', 'Id', 'Author', 'Genre'];
    this.genres = genres;
  }
}
