import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroInvoiceComponent } from './section-hero-invoice.component';

describe('SectionHeroInvoiceComponent', () => {
  let component: SectionHeroInvoiceComponent;
  let fixture: ComponentFixture<SectionHeroInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionHeroInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionHeroInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
