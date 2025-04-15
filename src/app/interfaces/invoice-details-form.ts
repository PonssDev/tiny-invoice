import { FormControl } from '@angular/forms';

export interface InvoiceDetailsForm {
  number: FormControl<string | null>;
  date: FormControl<string | null>;
  expirationDate: FormControl<string | null>;
}