import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDemoComponent } from './section-demo.component';

describe('SectionDemoComponent', () => {
  let component: SectionDemoComponent;
  let fixture: ComponentFixture<SectionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
