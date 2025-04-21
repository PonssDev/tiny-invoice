import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePreviewComponent } from './invoice-preview.component';

describe('InvoicePreviewComponent', () => {
  let component: InvoicePreviewComponent;
  let fixture: ComponentFixture<InvoicePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
