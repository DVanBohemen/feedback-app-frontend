import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFeedbackPartsComponent } from './short-feedback-parts.component';

describe('ShortFeedbackPartsComponent', () => {
  let component: ShortFeedbackPartsComponent;
  let fixture: ComponentFixture<ShortFeedbackPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFeedbackPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFeedbackPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
