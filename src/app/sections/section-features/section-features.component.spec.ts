import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFeaturesComponent } from './section-features.component';

describe('SectionFeaturesComponent', () => {
  let component: SectionFeaturesComponent;
  let fixture: ComponentFixture<SectionFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
