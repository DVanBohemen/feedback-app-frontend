import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCreatorComponent } from './label-creator.component';

describe('LabelCreatorComponent', () => {
  let component: LabelCreatorComponent;
  let fixture: ComponentFixture<LabelCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
