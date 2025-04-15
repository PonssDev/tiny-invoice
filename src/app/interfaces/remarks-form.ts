import { FormControl } from '@angular/forms';

export interface RemarksForm {
  remarks: FormControl<string | null>;
  paymentInformation: FormControl<string | null>;
}