export interface Book {
  id?: number;
  title: string;
  authors: string[]; // An array of strings, as there can be multiple authors
  isbn: string;
  publicationYear: number;
  publisher: string;
  genreIds: number[]; // An array of numbers, assuming genre IDs are numeric
  totalCopies: number;
  availableCopies: number;
  imageUrl?: string; // Optional property, as it might not always be present
  description?: string; // Optional property
}
