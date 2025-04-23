import { Component } from '@angular/core';
import { InvoiceTemplateComponent } from "../invoice-template/invoice-template.component";

@Component({
  selector: 'app-invoice-preview',
  imports: [InvoiceTemplateComponent],
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent {

}
