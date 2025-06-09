import { Component, input, inject, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../interfaces/book.interface';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Tag } from 'primeng/tag';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-view-book',
  imports: [AsyncPipe, CardModule, Tag, Button],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent implements OnInit {
  bookId = input('');
  book$!: Observable<Book>;
  private bookService = inject(BookService);

  ngOnInit() {
    this.book$ = this.bookService.getBookById(this.bookId());
  }
}
