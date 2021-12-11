import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFeedbackCustomPartsComponent } from './short-feedback-custom-parts.component';

describe('ShortFeedbackCustomPartsComponent', () => {
  let component: ShortFeedbackCustomPartsComponent;
  let fixture: ComponentFixture<ShortFeedbackCustomPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFeedbackCustomPartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFeedbackCustomPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
