import { FormGroup } from "@angular/forms";
import { InvoiceForm } from "./invoice-form-interface";

export interface InvoicePreview{
  invoiceForm: FormGroup<InvoiceForm>,
  subtotal: number,
  total: number,
  taxAmount: number,
  discountAmount: number,
}