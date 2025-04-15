import { FormControl } from '@angular/forms';

export interface TaxesForm {
  iva: FormControl<number | null>;
  discount: FormControl<number | null>;
}