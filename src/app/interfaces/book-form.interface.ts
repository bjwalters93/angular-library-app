import { FormControl, FormArray } from '@angular/forms';

export interface BookForm {
  id?: FormControl<number | null>;
  title: FormControl<string | null>;
  authors: FormArray<FormControl<string | null>>;
  isbn: FormControl<string | null>;
  publicationYear: FormControl<number | null>;
  publisher: FormControl<string | null>;
  genreIds: FormControl<number[] | null>;
  totalCopies: FormControl<number | null>;
  availableCopies: FormControl<number | null>;
  imageUrl?: FormControl<string | null>;
  description?: FormControl<string | null>;
}
