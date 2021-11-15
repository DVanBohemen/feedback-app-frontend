import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "./data.service";
import {ShortFeedbackFormGeneralModel} from "../../short-feedback/short-feedback-general-impression/short-feedback-general-form.model";
import {ShortFeedbackFormPartialModel} from "../../short-feedback/short-feedback-parts/short-feedback-form-partial.model";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService extends DataService{
  constructor(http: HttpClient) {
    super(http)
  }
  private _courseFeedbackUrl = "http://localhost:7000/course/feedback";
  private _useCustomLabelsUrl = "http://localhost:7000/labels/use-custom";

  postFeedback(generalFeedback: ShortFeedbackFormGeneralModel, partialFeedback?: ShortFeedbackFormPartialModel) {
    this.post({ generalFeedback: this.generateGeneralFeedbackDTO(generalFeedback), partialFeedback: this.generatePartialFeedbackDTO(partialFeedback)}, this._courseFeedbackUrl)
    .subscribe(response => {
      alert("Feedback successfully posted")
    }, error => {
      alert('Error when posting feedback!');
      console.log(error);
    });
  }

  generateGeneralFeedbackDTO(generalFeedback: ShortFeedbackFormGeneralModel) {
    return {
      generalThumbsUpWeight: generalFeedback.generalThumbsUpWeight,
      generalThumbsDownWeight: generalFeedback.generalThumbsDownWeight,
      generalThumbsUp: generalFeedback.generalThumbsUp,
      generalThumbsDown: generalFeedback.generalThumbsDown
    }
  }

  generatePartialFeedbackDTO(partialFeedback?: ShortFeedbackFormPartialModel) {
    if(partialFeedback !== undefined) {
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
    } else {
      return {}
    }
  }

  getUseCustomLabels() {
    let useCustomLabels = false;
    this.get(this._courseFeedbackUrl)
    .subscribe(response => {
      console.log(response)
      useCustomLabels = false; //todo
    }, error => {
      alert('Error when creating course!');
      console.log(error);
    });
    return useCustomLabels
  }


  setUseCustomLabels() {
    let useCustomLabels = true;
    this.put(useCustomLabels, this._useCustomLabelsUrl)
    .subscribe(response => {
      console.log(response)
      useCustomLabels = true; //todo
    }, error => {
      alert('Error when updating custom label usage!');
      console.log(error);
    });
  }

  postCustomLabels(customLabels: []) {
    this.post(customLabels, this._useCustomLabelsUrl)
    .subscribe(response => {
      console.log(response)
    }, error => {
      alert('Error when updating custom label usage!');
      console.log(error);
    });
  }

  getCustomLabels() {
    this.get(this._useCustomLabelsUrl)
    .subscribe(response => {
      console.log(response)
      return response;
    }, error => {
      alert('Error when creating course!');
      console.log(error);
    });
    return [];
  }
}
