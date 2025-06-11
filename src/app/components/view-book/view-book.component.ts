import { Component, inject, OnInit, model, signal } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { getGenres } from '../../Utils/genres.utils';
import { generateStatus } from '../../Utils/status.utils';

@Component({
  selector: 'app-view-book',
  imports: [AsyncPipe, CardModule, Tag, DialogModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent implements OnInit {
  book$!: Observable<Book>;
  viewBookVisibility = model(false);
  bookId = model(0);
  private bookService = inject(BookService);

  generateGenres(genreIds: number[]) {
    return getGenres(genreIds);
  }

  setStatus(book: Book) {
    return generateStatus(book);
  }

  ngOnInit() {
    this.book$ = this.bookService.getBookById(this.bookId());
  }
}
