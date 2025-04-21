import { Component } from '@angular/core';
import { InvoiceFormComponent } from '../../components/invoice-form/invoice-form.component';

@Component({
  selector: 'app-create-invoice',
  imports: [
    InvoiceFormComponent
  ],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css',
  standalone: true
})
export class CreateInvoiceComponent {
}
