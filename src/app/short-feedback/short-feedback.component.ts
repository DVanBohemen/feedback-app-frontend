import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from "../common/services/course.service";
import {ShortFeedbackFormPartialModel} from "./short-feedback-parts/short-feedback-form-partial.model";
import {ShortFeedbackFormGeneralModel} from "./short-feedback-general-impression/short-feedback-general-form.model";
import {FeedbackService} from "../common/services/feedback.service";
import {CustomFeedbackService} from '../common/services/custom-feedback.service';
import {CustomFeedbackLabel} from '../common/models/custom-feedback-label.model';

@Component({
  selector: 'app-short-feedback',
  templateUrl: './short-feedback.component.html',
  styleUrls: ['./short-feedback.component.css']
})

export class ShortFeedbackComponent implements OnInit {
  course: string;
  private generalFeedback: ShortFeedbackFormGeneralModel | undefined;
  private partialFeedback: ShortFeedbackFormPartialModel | undefined;
  private _customFeedback: CustomFeedbackLabel[] | undefined;
  private _feedbackService: FeedbackService;
  private _customFeedbackService: CustomFeedbackService;
  private _courseService: CourseService;
  private _useCustomLabels: boolean = false;

  constructor(courseService: CourseService, feedbackService: FeedbackService, customFeedbackService: CustomFeedbackService) {
    this._feedbackService = feedbackService;
    this._courseService = courseService;
    this._customFeedbackService = customFeedbackService;
    this.course = "Geen cursus gedefinieerd";
  }

  ngOnInit(): void {
    this.course = this._courseService.getCourse();
    this._useCustomLabels = this._customFeedbackService.getUseCustomLabels();
  }

  addGeneralFeedback($event: ShortFeedbackFormGeneralModel) {
    this.generalFeedback = $event;
  }

  addPartialFeedback($event: ShortFeedbackFormPartialModel) {
    this.partialFeedback = $event;
  }

  addCustomFeedback($event: CustomFeedbackLabel[]) {
    this._customFeedback = $event;
  }

  showSubmit() {
    return this.generalFeedback !== undefined;
  }

  useCustomLabels() {
    return this._useCustomLabels;
  }

  submit() {
    if (this._useCustomLabels) {
      if (this.generalFeedback !== undefined && this._customFeedback !== undefined) {
        this._feedbackService.postCustomFeedback(this.generalFeedback, this._customFeedback);
      } else if (this.generalFeedback !== undefined && this._customFeedback === undefined) {
        this._feedbackService.postCustomFeedback(this.generalFeedback);
      } else {
        alert("De algemene impressie is een verplicht onderdeel.")
      }
    } else {
      if (this.generalFeedback !== undefined && this.partialFeedback !== undefined) {
        this._feedbackService.postFeedback(this.generalFeedback, this.partialFeedback);
      } else if (this.generalFeedback !== undefined && this.partialFeedback === undefined) {
        this._feedbackService.postFeedback(this.generalFeedback);
      } else {
        alert("De algemene impressie is een verplicht onderdeel.")
      }
    }
  }
}
