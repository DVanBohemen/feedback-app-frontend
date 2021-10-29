import {Component, Input, OnInit} from '@angular/core';
import {CourseRetrievalService} from "../shared/services/course-retrieval.service";
import {ShortFeedbackFormPartialModel} from "./short-feedback-parts/short-feedback-form-partial.model";

@Component({
  selector: 'app-short-feedback',
  templateUrl: './short-feedback.component.html',
  styleUrls: ['./short-feedback.component.css']
})

export class ShortFeedbackComponent implements OnInit {
  course: string;
  // @Input('thumb-up') thumbsUp: boolean; Nodig bij custom component tag

  constructor(courseService: CourseRetrievalService) {
    this.course = courseService.getCourse();
  }

  ngOnInit(): void {
  }
}
