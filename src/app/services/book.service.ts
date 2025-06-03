import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

export interface Book {
  id: number;
  title: string;
  author: string[]; // An array of strings, as there can be multiple authors
  isbn: string;
  publicationYear: number;
  publisher: string;
  genreIds: number[]; // An array of numbers, assuming genre IDs are numeric
  totalCopies: number;
  availableCopies: number;
  imageUrl?: string; // Optional property, as it might not always be present
  description?: string; // Optional property
}

@Injectable({
  providedIn: 'root', // This makes the service a singleton and available throughout the app.
})
export class BookService {
  private apiUrl = 'http://localhost:3001/books'; // Replace with your actual API URL

  constructor(private http: HttpClient) {} // Inject HttpClient

  /**
   * Fetches all books from the API.
   *
   * Best Practices:
   * 1. Return Observable: Always return an Observable for async operations.
   * 2. Type Safety: Specify the expected type of the data being returned (Book[]).
   * 3. Error Handling: Use catchError to handle API errors gracefully.
   * 4. Retry Mechanism: Use retry to re-attempt failed requests (optional, but good for flaky networks).
   * 5. Immutability: Ensure that the data returned from the API is not directly modified in the service.
   */
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl).pipe(
      // You might use 'map' here if your API response wraps the actual book data
      // For example, if your API returns { data: Book[] }
      // map(response => response.data),
      retry(2), // Retry a failed request up to 2 times
      catchError(this.handleError) // Handle errors
    );
  }

  /**
   * Fetches a single book by its ID.
   */
  getBookById(id: string): Observable<Book> {
    const url = `${this.apiUrl}/${id}`;
    return this.http
      .get<Book>(url)
      .pipe(retry(1), catchError(this.handleError));
  }

  /**
   * Centralized error handling function.
   * This improves consistency and reduces code duplication.
   */
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
    console.error(errorMessage); // Log the error for debugging
    return throwError(() => new Error(errorMessage)); // Re-throw for component to handle
  }
}
