import { TestBed } from '@angular/core/testing';

import { CourseRetrievalService } from './course-retrieval.service';

describe('CourseRetrievalService', () => {
  let service: CourseRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
