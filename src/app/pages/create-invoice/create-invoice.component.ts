import { Component } from '@angular/core';
import { InvoiceFormComponent } from '../../components/invoice-form/invoice-form.component';
import { InvoicePreviewComponent } from "../../components/invoice-preview/invoice-preview.component";
import { SectionHeroInvoiceComponent } from "../../sections/section-hero-invoice/section-hero-invoice.component";

@Component({
  selector: 'app-create-invoice',
  imports: [
    InvoiceFormComponent,
    InvoicePreviewComponent,
    SectionHeroInvoiceComponent
],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css',
  standalone: true
})
export class CreateInvoiceComponent {
}
