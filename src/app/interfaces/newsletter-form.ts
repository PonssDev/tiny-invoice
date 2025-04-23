import { FormControl } from "@angular/forms";

export interface NewsLetterForm {
  email: FormControl<string | null>;
}