import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../interfaces/book.interface';
import { Genre } from '../../interfaces/genre.interface';
import { inject } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';

@Component({
  selector: 'app-new-book-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CardModule,
    ListboxModule,
  ],
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

  genres!: Genre[];

  ngOnInit() {
    this.genres = [
      { id: 1, name: 'Science Fiction' },
      { id: 2, name: 'Fantasy' },
      { id: 3, name: 'Classic' },
      { id: 4, name: 'Mystery' },
      { id: 5, name: 'Epic' },
      { id: 6, name: 'Historical Fiction' },
      { id: 7, name: 'Romance' },
      { id: 8, name: 'Thriller' },
      { id: 9, name: 'Non-Fiction' },
      { id: 10, name: 'Philosophy' },
      { id: 11, name: 'Memoir' },
      { id: 12, name: 'Adventure' },
    ];
  }

  onSubmit(): void {
    console.log(this.newBookForm.value);
    //   if (this.newBookForm.valid) {
    //     const newBook: Book = this.newBookForm.value;
    //     console.log('Book to be saved:', newBook);
    //     // Perform your save operation
    //   } else {
    //     console.log('Form is invalid. Please check fields.');
    //     this.newBookForm.markAllAsTouched();
    //   }
  }
}
