import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Book } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3001/books';

  private http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http
      .get<Book[]>(this.apiUrl)
      .pipe(retry(2), catchError(this.handleError));
  }

  getBookById(id: number): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Book>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getBookByTitle(title: string): Observable<Book[]> {
    const url = `${this.apiUrl}?title=${title}`;
    return this.http
      .get<Book[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getBookByIsbn(isbn: string): Observable<Book[]> {
    const url = `${this.apiUrl}?isbn=${isbn}`;
    return this.http
      .get<Book[]>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getBooksByAuthor(author: string): Observable<Book[]> {
    const url = `${this.apiUrl}?authors=${author}`;
    return this.http
      .get<Book[]>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  getBooksByGenre(genre: string): Observable<Book[]> {
    const url = `${this.apiUrl}?genreIds=${genre}`;
    return this.http
      .get<Book[]>(url)
      .pipe(retry(2), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      if (error.error && error.error.message) {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
      }
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
