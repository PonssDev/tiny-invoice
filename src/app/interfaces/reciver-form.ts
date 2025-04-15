import { FormControl } from '@angular/forms';

export interface ReciverForm {
  reciverName: FormControl<string | null>;
  reciverAddress: FormControl<string | null>;
  reciverNif: FormControl<string | null >;
}