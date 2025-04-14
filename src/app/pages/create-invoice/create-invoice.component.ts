import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-invoice',
  imports: [],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css'
})
export class CreateInvoiceComponent {

  public invoiceForm: FormGroup

  constructor(private readonly fb: FormBuilder){
    this.invoiceForm = this.fb.group({
      emisor: this.fb.group({
        emisorName: ['', Validators.required],
        emisorAddress: [''],
        emisorNif: [''],
        emisorEmail: [''],
      }),
      reciver: this.fb.group({
        reciverName: ['', Validators.required],
        reciverAddress: [''],
        reciverNif: [''],
      }),
      invoiceDetails: this.fb.group({
        number: [''],
        date: [''],
        expirationDate: [''],
      }),
      services: this.fb.array([
        this.newService()
      ]),
      taxes: this.fb.group({
        iva: [''],
        discount: [''],
      }),
      additionalRemarks: this.fb.group({
        marks: [''],
        paymentInformation: [''],
      })
    })
  }

  get services(): FormArray{
    return this.invoiceForm.get('services') as FormArray
  }

  private newService(): FormGroup{
    return this.fb.group({
      description: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
      price: ['', [Validators.required, Validators.min(0)]],
      total: [''],
    })
  }

  public addService(): void{
    this.services.push(this.newService())
  }

  public deleteService(index: number): void{
    this.services.removeAt(index)
  }

  public onSubmit(){
    if(this.invoiceForm.valid){
      console.log(this.invoiceForm.value)
    } else {
      console.log('Formulario invalido')
    }
  }

}
