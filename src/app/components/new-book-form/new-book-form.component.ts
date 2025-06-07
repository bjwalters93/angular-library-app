import { Component } from '@angular/core';
import { FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { BookForm } from '../../interfaces/book-form.interface';
import { Genre } from '../../interfaces/genre.interface';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { Fluid } from 'primeng/fluid';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-new-book-form',
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    CardModule,
    ListboxModule,
    InputGroup,
    InputGroupAddonModule,
    FieldsetModule,
    CommonModule,
    TagModule,
    Fluid,
    PanelModule,
  ],
  templateUrl: './new-book-form.component.html',
  styleUrl: './new-book-form.component.css',
})
export class NewBookFormComponent {
  newBookForm!: FormGroup<BookForm>;
  genres!: Genre[];

  ngOnInit() {
    this.newBookForm = new FormGroup<BookForm>({
      title: new FormControl(),
      authors: new FormArray([new FormControl()]),
      isbn: new FormControl(),
      publicationYear: new FormControl(),
      publisher: new FormControl(),
      genreIds: new FormControl(),
      totalCopies: new FormControl(),
      availableCopies: new FormControl(),
      imageUrl: new FormControl(),
      description: new FormControl(),
    });

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

  get authors() {
    return this.newBookForm.get('authors') as FormArray;
  }

  addAuthor() {
    this.authors.push(new FormControl());
  }

  removeAuthor(index: number): void {
    this.authors.removeAt(index);
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
