import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-view-book',
  imports: [],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css',
})
export class ViewBookComponent {
  id = input<string>();
  ngOnInit(): void {
    console.log('Getting route information works! Book ID:', this.id());
  }
  //   @Input()
  //   set id(bookId: string) {
  //     console.log('Getting route information works! Book ID:', bookId);
  //   }
}
