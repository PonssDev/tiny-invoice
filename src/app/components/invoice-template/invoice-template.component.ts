import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormService } from '../../services/form.service';
import { NgFor, NgIf } from '@angular/common';
import { InvoicePreview } from '../../interfaces/invoice-preview';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-invoice-template',
  imports: [
    NgFor,
    NgIf,
  ],
  templateUrl: './invoice-template.component.html',
  styleUrl: './invoice-template.component.css'
})
export class InvoiceTemplateComponent implements OnInit {

  @ViewChild('invoiceElement', { static: false }) invoiceElement!: ElementRef

  private readonly formService = inject(FormService)

  public invoiceData: any

  ngOnInit(): void {
    this.formService.formData$.subscribe((data: InvoicePreview) => {
      if (data) {
        this.invoiceData = data
        console.log('Datos recibidos en invoice-template', this.invoiceData)
      }
    })
  }

  public downloadPDF(): void {
    const element = this.invoiceElement.nativeElement

    const opt = {
      margin: 0.5,
      filename: `invoice-${this.invoiceData.invoiceDetails?.number}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }
    html2pdf().set(opt).from(element).save();
  }
}
