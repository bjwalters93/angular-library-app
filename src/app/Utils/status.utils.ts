import { Book } from '../interfaces/book.interface';

export function generateStatus(book: Book) {
  let status = {
    severity: '',
    text: '',
  };
  if (book.availableCopies == 0) {
    status.severity = 'danger';
    status.text = 'Unavailable';
    return status;
  } else {
    status.severity = 'success';
    status.text = 'Available';
    return status;
  }
}
