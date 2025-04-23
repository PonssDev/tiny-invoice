import { Component, OnInit } from '@angular/core';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-invoice-preview',
  imports: [],
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.css'
})
export class InvoicePreviewComponent implements OnInit {

  public invoiceData: any

  constructor(private readonly formService: FormService){}

  ngOnInit(){
    this.formService.formData$.subscribe(data => {
      if(data){
        this.invoiceData = data
        console.log('Datos recibidos en invoice-preview', this.invoiceData)
      }
    })
  }

}
