import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';
import { InvoiceForm } from '../../interfaces/invoice-form-interface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-invoice-template',
  imports: [
    NgFor,
  ],
  templateUrl: './invoice-template.component.html',
  styleUrl: './invoice-template.component.css'
})
export class InvoiceTemplateComponent implements OnInit{

  public invoiceData: any

  constructor(private readonly formService: FormService){}

  ngOnInit(): void{
    this.formService.formData$.subscribe((data: InvoiceForm) => {
      if(data){
        this.invoiceData = data
        console.log('Datos recibidos en invoice-preview', this.invoiceData)
      }
    })
  }
}
