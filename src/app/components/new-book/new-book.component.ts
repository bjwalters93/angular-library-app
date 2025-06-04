import { Component } from '@angular/core';
import { NewBookFormComponent } from '../new-book-form/new-book-form.component';

@Component({
  selector: 'app-new-book',
  imports: [NewBookFormComponent],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css',
})
export class NewBookComponent {}
