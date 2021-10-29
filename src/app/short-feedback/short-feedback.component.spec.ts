import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFeedbackComponent } from './short-feedback.component';

describe('ShortFeedbackComponent', () => {
  let component: ShortFeedbackComponent;
  let fixture: ComponentFixture<ShortFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
