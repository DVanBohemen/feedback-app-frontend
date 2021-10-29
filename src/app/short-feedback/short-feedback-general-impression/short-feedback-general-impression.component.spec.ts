import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFeedbackGeneralImpressionComponent } from './short-feedback-general-impression.component';

describe('ShortFeedbackGeneralImpressionComponent', () => {
  let component: ShortFeedbackGeneralImpressionComponent;
  let fixture: ComponentFixture<ShortFeedbackGeneralImpressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFeedbackGeneralImpressionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFeedbackGeneralImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
