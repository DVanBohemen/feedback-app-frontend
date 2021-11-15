import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../common/services/course.service";
import {ShortFeedbackFormPartialModel} from "./short-feedback-parts/short-feedback-form-partial.model";
import {ShortFeedbackFormGeneralModel} from "./short-feedback-general-impression/short-feedback-general-form.model";
import {FeedbackService} from "../common/services/feedback.service";

@Component({
  selector: 'app-short-feedback',
  templateUrl: './short-feedback.component.html',
  styleUrls: ['./short-feedback.component.css']
})

export class ShortFeedbackComponent implements OnInit {
  course: string;
  private generalFeedback: ShortFeedbackFormGeneralModel | undefined;
  private partialFeedback: ShortFeedbackFormPartialModel | undefined;
  private _feedbackService: FeedbackService;
  private _courseService: CourseService;

  constructor(courseService: CourseService, feedbackService: FeedbackService) {
    this._feedbackService = feedbackService;
    this._courseService = courseService;
    this.course = "";
  }

  ngOnInit(): void {
    this.course = this._courseService.getCourse();
  }

  addGeneralFeedback($event: ShortFeedbackFormGeneralModel) {
    this.generalFeedback = $event;
  }

  addPartialFeedback($event: ShortFeedbackFormPartialModel) {
    this.partialFeedback = $event;
  }

  showSubmit() {
    return this.generalFeedback !== undefined;
  }

  submit() {
    if (this.generalFeedback !== undefined && this.partialFeedback !== undefined) {
      this._feedbackService.postFeedback(this.generalFeedback, this.partialFeedback);
    } else if (this.generalFeedback !== undefined && this.partialFeedback === undefined) {
      this._feedbackService.postFeedback(this.generalFeedback);
    } else {
      alert("De algemene impressie is een verplicht onderdeel.")
    }
  }
}
