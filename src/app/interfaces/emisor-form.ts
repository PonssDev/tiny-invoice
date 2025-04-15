import { FormControl } from '@angular/forms';

export interface EmisorForm {
  emisorName: FormControl<string | null>;
  emisorAddress: FormControl<string | null>;
  emisorNif: FormControl<string | null>;
  emisorEmail: FormControl<string | null>;
}