import { FormControl } from '@angular/forms';

export interface InvoiceItem {
  description: FormControl<string | null>;
  quantity: FormControl<number | null>;
  price: FormControl<number | null>;
  total: FormControl<number | null>;
}