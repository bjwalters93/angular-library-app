import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../services/book.service';
import { inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-new-book-form',
  imports: [ReactiveFormsModule, InputTextModule, InputNumberModule],
  templateUrl: './new-book-form.component.html',
  styleUrl: './new-book-form.component.css',
})
export class NewBookFormComponent {
  private fb = inject(FormBuilder);

  newBookForm = this.fb.group<Book>({
    title: '',
    author: [],
    isbn: '',
    publicationYear: 0,
    publisher: '',
    genreIds: [],
    totalCopies: 0,
    availableCopies: 0,
    imageUrl: '',
    description: '',
  });

  //   onSubmit(): void {
  //     if (this.newBookForm.valid) {
  //       const newBook: Book = this.newBookForm.value;
  //       console.log('Book to be saved:', newBook);
  //       // Perform your save operation
  //     } else {
  //       console.log('Form is invalid. Please check fields.');
  //       this.newBookForm.markAllAsTouched();
  //     }
  //   }
}
