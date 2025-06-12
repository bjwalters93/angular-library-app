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
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { generateStatus } from '../../Utils/status.utils';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { genres } from '../../Utils/genres.utils';
import { Genre } from '../../interfaces/genre.interface';
import { Validators } from '@angular/forms';

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
    ProgressSpinnerModule,
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

  constructor() {
    // this.books$ = this.bookService.getBooks();
    this.myMethod();
  }

  myMethod() {
    setTimeout(() => {
      this.books$ = this.bookService.getBooks();
    }, 1500);
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
  }

  onSubmit() {
    let searchType = this.searchForm.value.searchType;
    let searchTerm = this.searchForm.value.searchTerm;
    if (searchType === 'Isbn' && this.searchForm.valid) {
      this.books$ = this.bookService.getBookByIsbn(searchTerm);
    } else if (searchType === 'Title') {
      this.books$ = this.bookService.getBooksByTitle(searchTerm);
    } else if (searchType === 'Author') {
      this.books$ = this.bookService.getBooksByAuthor(searchTerm);
    } else if (searchType === 'Genre') {
      this.books$ = this.bookService.getBooksByGenre(searchTerm);
    }
  }

  searchFormReset() {
    this.searchForm.reset();
    this.books$ = this.bookService.getBooks();
  }

  get searchTerm(): FormControl {
    return this.searchForm.get('searchTerm') as FormControl;
  }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchType: new FormControl('', Validators.required),
      searchTerm: new FormControl('', Validators.required),
    });
    this.searchTypes = ['Isbn', 'Title', 'Author', 'Genre'];
    this.genres = genres;
  }
}
