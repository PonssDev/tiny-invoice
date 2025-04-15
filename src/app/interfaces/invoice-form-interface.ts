import { FormArray, FormGroup } from "@angular/forms";
import { EmisorForm } from "./emisor-form";
import { InvoiceDetailsForm } from "./invoice-details-form";
import { InvoiceItem } from "./invoice-item";
import { ReciverForm } from "./reciver-form";
import { RemarksForm } from "./remarks-form";
import { TaxesForm } from "./taxes-form";

export interface InvoiceForm {
  emisor: FormGroup<EmisorForm>;
  reciver: FormGroup<ReciverForm>;
  invoiceDetails: FormGroup<InvoiceDetailsForm>;
  services: FormArray<FormGroup<InvoiceItem>>;
  taxes: FormGroup<TaxesForm>;
  additionalRemarks: FormGroup<RemarksForm>;
}
