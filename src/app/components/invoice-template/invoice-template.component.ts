import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { NgFor, NgIf } from '@angular/common';
import { InvoicePreview } from '../../interfaces/invoice-preview';

@Component({
  selector: 'app-invoice-template',
  imports: [
    NgFor,
    NgIf,
  ],
  templateUrl: './invoice-template.component.html',
  styleUrl: './invoice-template.component.css'
})
export class InvoiceTemplateComponent implements OnInit{

  public invoiceData: any

  constructor(private readonly formService: FormService){}

  ngOnInit(): void{
    this.formService.formData$.subscribe((data: InvoicePreview) => {
      if(data){
        this.invoiceData = data
        console.log('Datos recibidos en invoice-template', this.invoiceData)
      }
    })
  }
}
