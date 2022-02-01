import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";
import {ShortFeedbackFormGeneralModel} from "../../short-feedback/short-feedback-general-impression/short-feedback-general-form.model";
import {ShortFeedbackFormPartialModel} from "../../short-feedback/short-feedback-parts/short-feedback-form-partial.model";
import {CustomFeedbackLabel} from '../models/custom-feedback-label.model';
import {CustomFeedbackPostLabelModel} from '../models/custom-feedback-post-label.model';
import {FeedbackForm} from '../../api/models/feedback-form';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends DataService{
  constructor(http: HttpClient) {
    super(http)
  }
    private _courseFeedbackUrl = "http://localhost:7000/course/feedback";
    private _courseFeedbackCustomUrl = "http://localhost:7000/course/feedback/custom";


    postScoreFeedback(feedbackForm: FeedbackForm) {
        this.post({
            name: "feedbackForm.name",
            score: 1,
            comment: "feedbackForm.comment"
        }, this._courseFeedbackUrl).subscribe(response => {
            console.log("Score feedback posted: " + JSON.stringify(feedbackForm))
            alert("Feedback successfully posted")
        }, error => {
            alert('Error when posting feedback!');
            console.log(error);
        });
    }

  postFeedback(generalFeedback: ShortFeedbackFormGeneralModel, partialFeedback?: ShortFeedbackFormPartialModel) {
    if (partialFeedback !== undefined) {
    this.post({
      generalFeedback: this.generateGeneralFeedbackDTO(generalFeedback),
      partialFeedback: this.generatePartialFeedbackDTO(partialFeedback)
    }, this._courseFeedbackUrl)
        .subscribe(response => {
          console.log("GeneralFeedback posted: " + JSON.stringify(generalFeedback))
          console.log("PartialFeedback posted: " + JSON.stringify(partialFeedback))
          alert("Feedback successfully posted")
        }, error => {
          alert('Error when posting feedback!');
          console.log(error);
        });
    } else {
      this.post({
        generalFeedback: this.generateGeneralFeedbackDTO(generalFeedback)
      }, this._courseFeedbackUrl)
          .subscribe(response => {
            console.log("GeneralFeedback posted: " + JSON.stringify(generalFeedback))
            alert("Feedback successfully posted")
          }, error => {
            alert('Error when posting feedback!');
            console.log(error);
          });
    }
  }

  postCustomFeedback(generalFeedback: ShortFeedbackFormGeneralModel, customFeedbackLabels?: CustomFeedbackLabel[]) {
    if (customFeedbackLabels !== undefined) {
      this.post({
        generalFeedback: this.generateGeneralFeedbackDTO(generalFeedback),
        customFeedback: FeedbackService.generateCustomFeedbackDTO(customFeedbackLabels)
      }, this._courseFeedbackCustomUrl)
          .subscribe(response => {
            console.log("GeneralFeedback posted: " + JSON.stringify(generalFeedback))
            console.log("CustomFeedback posted: " + JSON.stringify(customFeedbackLabels))
            alert("Feedback successfully posted")
          }, error => {
            alert('Error when posting feedback!');
            console.log(error);
          });
    } else {
      this.post({
        generalFeedback: this.generateGeneralFeedbackDTO(generalFeedback)
      }, this._courseFeedbackUrl)
          .subscribe(response => {
            console.log("GeneralFeedback posted: " + JSON.stringify(generalFeedback))
            alert("Feedback successfully posted")
          }, error => {
            alert('Error when posting feedback!');
            console.log(error);
          });
    }
  }

  generateGeneralFeedbackDTO(generalFeedback: ShortFeedbackFormGeneralModel) {
    return {
      generalThumbsUpWeight: generalFeedback.generalThumbsUpWeight,
      generalThumbsDownWeight: generalFeedback.generalThumbsDownWeight,
      generalThumbsUp: generalFeedback.generalThumbsUp,
      generalThumbsDown: generalFeedback.generalThumbsDown
    }
  }

  generatePartialFeedbackDTO(partialFeedback: ShortFeedbackFormPartialModel) {
      return {
        structurePositiveWeight: partialFeedback.structurePositiveWeight,
        structurePositiveText: partialFeedback.structurePositiveText,
        structureNegativeWeight: partialFeedback.structureNegativeWeight,
        structureNegativeText: partialFeedback.structureNegativeText,
        presentationPositiveWeight: partialFeedback.presentationPositiveWeight,
        presentationPositiveText: partialFeedback.presentationPositiveText,
        presentationNegativeWeight: partialFeedback.presentationNegativeWeight,
        presentationNegativeText: partialFeedback.presentationNegativeText,
        subjectsPositiveWeight: partialFeedback.subjectsPositiveWeight,
        subjectsPositiveText: partialFeedback.subjectsPositiveText,
        subjectsNegativeWeight: partialFeedback.subjectsNegativeWeight,
        subjectsNegativeText: partialFeedback.subjectsNegativeText,
        explanationPositiveWeight: partialFeedback.explanationPositiveWeight,
        explanationPositiveText: partialFeedback.explanationPositiveText,
        explanationNegativeWeight: partialFeedback.explanationNegativeWeight,
        explanationNegativeText: partialFeedback.explanationNegativeText,
        structurePositive: partialFeedback.structurePositive,
        structureNegative: partialFeedback.structureNegative,
        presentationPositive: partialFeedback.presentationPositive,
        presentationNegative: partialFeedback.presentationNegative,
        subjectsPositive: partialFeedback.subjectsPositive,
        subjectsNegative: partialFeedback.subjectsNegative,
        explanationPositive: partialFeedback.explanationPositive,
        explanationNegative: partialFeedback.explanationNegative
      }
    }

    private static generateCustomFeedbackDTO(customFeedbackLabels: CustomFeedbackLabel[]) {
      let labels = []
        for (const label of customFeedbackLabels) {
            labels.push(new CustomFeedbackPostLabelModel(label.selected, label.name, label.positive, label.weight))
        }
        return labels;
    }
}
