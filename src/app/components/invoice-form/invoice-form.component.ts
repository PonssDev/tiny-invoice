import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { InvoiceForm } from '../../interfaces/invoice-form-interface';
import { FormService } from '../../services/form.service';

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
  @Output() donwloadInvoice = new EventEmitter<void>()

  private readonly fb = inject(FormBuilder);

  private readonly formService = inject(FormService);

  public invoiceForm!: FormGroup<InvoiceForm>;

  public subtotal: number = 0;

  public total: number = 0;

  public discount: number = 0;

  public discountAmount: number = 0;

  public tax: number = 21;

  public taxAmount: number = 0;

  public today: string = ''

  public formSubmitted: boolean = false;

  ngOnInit(): void {
    this.getToday()
    this.initForm()
    this.invoiceForm.get('taxes.iva')?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });

    this.invoiceForm.get('taxes.discount')?.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  get services(): FormArray {
    return this.invoiceForm.get('services') as FormArray;
  }

  public onSubmit() {
    this.formSubmitted = true;
    this.markFormGroupTouched(this.invoiceForm);

    if (this.invoiceForm.valid) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const invoicePreview = {
        ...this.invoiceForm.value,
        subtotal: this.subtotal,
        total: this.total,
        discountAmount: this.discountAmount,
        taxAmount: this.taxAmount,
      }
      this.formService.getFormData(invoicePreview)
    }
  }

  public addService(): void {
    this.services.push(this.newService());
  }

  public removeService(index: number): void {
    this.services.removeAt(index);
  }

  public onDownloadClick(): void {
    this.formSubmitted = true;
    this.markFormGroupTouched(this.invoiceForm);

    if (this.invoiceForm.valid) {
      this.donwloadInvoice.emit();
    }
  }

  public onSaveClick(): void {
    this.formSubmitted = true;
    this.markFormGroupTouched(this.invoiceForm);

    if (this.invoiceForm.valid) {
      console.log('Formulario guardado');
      // Implementar lógica para guardar el formulario
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else if (control instanceof FormArray) {
        control.controls.forEach(arrayControl => {
          if (arrayControl instanceof FormGroup) {
            this.markFormGroupTouched(arrayControl);
          } else {
            arrayControl.markAsTouched();
          }
        });
      }
    });
  }

  private getToday(): void {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    this.today = `${year}-${month}-${day}`
  }

  private initForm(): void {
    this.invoiceForm = this.fb.group({
      emisor: this.fb.group({
        emisorName: this.fb.control('', Validators.required),
        emisorAddress: this.fb.control('', Validators.required),
        emisorNif: this.fb.control('', Validators.required),
        emisorEmail: this.fb.control('', [Validators.required, Validators.email]),
      }),
      reciver: this.fb.group({
        reciverName: this.fb.control('', Validators.required),
        reciverAddress: this.fb.control('', Validators.required),
        reciverNif: this.fb.control('', Validators.required),
      }),
      invoiceDetails: this.fb.group({
        number: this.fb.control('', Validators.required),
        date: this.fb.control(this.today),
        expirationDate: this.fb.control(this.today),
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
    this.taxAmount = parseFloat(((taxableAmount * taxRate) / 100).toFixed(2));

    this.total = parseFloat((taxableAmount + this.taxAmount).toFixed(2));
  }
}
