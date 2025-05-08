import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFaqComponent } from './section-faq.component';

describe('SectionFaqComponent', () => {
  let component: SectionFaqComponent;
  let fixture: ComponentFixture<SectionFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
