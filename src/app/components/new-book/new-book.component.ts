import { Component } from '@angular/core';
import { NewBookFormComponent } from '../new-book-form/new-book-form.component';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-new-book',
  imports: [NewBookFormComponent, PanelModule],
  templateUrl: './new-book.component.html',
  styleUrl: './new-book.component.css',
})
export class NewBookComponent {}
