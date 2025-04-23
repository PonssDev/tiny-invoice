import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { InvoiceForm } from '../../interfaces/invoice-form-interface';

@Component({
  selector: 'app-invoice-form',
  imports: [
    NgFor,
    ReactiveFormsModule,
  ],
  templateUrl: './invoice-form.component.html',
  styleUrl: './invoice-form.component.css',
  standalone: true
})
export class InvoiceFormComponent implements OnInit {
  public invoiceForm: FormGroup<InvoiceForm>;

  public subtotal: number = 0;
  public total: number = 0;
  public discount: number = 0;
  public tax: number = 21;
  public discountAmount: number = 0;

  ngOnInit(): void {
    this.invoiceForm.get('taxes.iva')?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });

    this.invoiceForm.get('taxes.discount')?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  constructor(private readonly fb: FormBuilder) {
    this.invoiceForm = this.fb.group<InvoiceForm>({
      emisor: this.fb.group({
        emisorName: this.fb.control('', Validators.required),
        emisorAddress: this.fb.control(''),
        emisorNif: this.fb.control(''),
        emisorEmail: this.fb.control(''),
      }),
      reciver: this.fb.group({
        reciverName: this.fb.control('', Validators.required),
        reciverAddress: this.fb.control(''),
        reciverNif: this.fb.control(''),
      }),
      invoiceDetails: this.fb.group({
        number: this.fb.control(''),
        date: this.fb.control(''),
        expirationDate: this.fb.control(''),
      }),
      services: this.fb.array([
        this.newService()
      ]),
      taxes: this.fb.group({
        iva: this.fb.control(21, Validators.required),
        discount: this.fb.control<number | null>(null),
      }),
      additionalRemarks: this.fb.group({
        remarks: this.fb.control(''),
        paymentInformation: this.fb.control(''),
      }),
    });
  }

  get services(): FormArray {
    return this.invoiceForm.get('services') as FormArray;
  }

  public onSubmit() {
    if (this.invoiceForm.valid) {
      console.log('Formulario válido');
    } else {
      console.log('Formulario inválido');
    }
  }

  private newService(): FormGroup {
    const service = this.fb.group({
      description: this.fb.control('', Validators.required),
      quantity: this.fb.control(1),
      price: this.fb.control('', [Validators.required, Validators.min(0)]),
      total: this.fb.control<number | null>(null),
    });

    service.get('total')?.disable();

    service.get('quantity')?.valueChanges.subscribe(() => {
      this.calculateTotal(service);
    });

    service.get('price')?.valueChanges.subscribe(() => {
      this.calculateTotal(service);
    });
    
    return service;
  }

  public addService(): void {
    this.services.push(this.newService());
  }

  public removeService(index: number): void {
    this.services.removeAt(index);
  }

  private calculateTotal(service: FormGroup) {
    const quantity = service.get('quantity')?.value;
    const price = service.get('price')?.value;
    
    const serviceTotal = quantity * price;
    service.get('total')?.setValue(serviceTotal.toFixed(2));
    
    this.calculateTotals();
  }

  private calculateTotals() {
    this.subtotal = 0;
    this.services.controls.forEach(service => {
      const quantity = service.get('quantity')?.value ?? 0;
      const price = service.get('price')?.value ?? 0;
      this.subtotal += quantity * price;
    });

    const discountRate = this.invoiceForm.get('taxes.discount')?.value ?? 0;
    this.discount = discountRate;
    this.discountAmount = (this.subtotal * discountRate) / 100;

    const taxRate = this.invoiceForm.get('taxes.iva')?.value ?? 0;
    this.tax = taxRate;
    const taxableAmount = this.subtotal - this.discountAmount;
    const taxAmount = (taxableAmount * taxRate) / 100;

    this.total = parseFloat((taxableAmount + taxAmount).toFixed(2));
  }
}
