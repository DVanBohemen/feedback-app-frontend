import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  ShortFeedbackFormPartialModel
} from "./short-feedback-form-partial.model";


@Component({
  selector: 'app-short-feedback-parts',
  templateUrl: './short-feedback-parts.component.html',
  styleUrls: ['./short-feedback-parts.component.css']
})
export class ShortFeedbackPartsComponent implements OnInit {
  shortFeedbackFormPartialModel: ShortFeedbackFormPartialModel;

  @Output() newPartialtFeedbackEvent = new EventEmitter<ShortFeedbackFormPartialModel>();

  constructor() {
    this.shortFeedbackFormPartialModel = new ShortFeedbackFormPartialModel(false, false, false, false, false,
      false, false, false,);
  }

  ngOnInit(): void {
  }

  onSelectPartialThumbUp(buttonElement: HTMLButtonElement): void {
    if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.explanationPositiveText)) {
      this.shortFeedbackFormPartialModel.explanationPositive = !this.shortFeedbackFormPartialModel.explanationPositive;
      this.shortFeedbackFormPartialModel.explanationNegative = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.presentationPositiveText)) {
      this.shortFeedbackFormPartialModel.presentationPositive = !this.shortFeedbackFormPartialModel.presentationPositive;
      this.shortFeedbackFormPartialModel.presentationNegative = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.structurePositiveText)) {
      this.shortFeedbackFormPartialModel.structurePositive = !this.shortFeedbackFormPartialModel.structurePositive ;
      this.shortFeedbackFormPartialModel.structureNegative = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.subjectsPositiveText)) {
      this.shortFeedbackFormPartialModel.subjectsPositive = !this.shortFeedbackFormPartialModel.subjectsPositive;
      this.shortFeedbackFormPartialModel.subjectsNegative = false;
    }
    this.newPartialtFeedbackEvent.emit(this.shortFeedbackFormPartialModel);
  }

  onSelectPartialThumbDown(buttonElement: HTMLButtonElement): void {
    if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.explanationNegativeText)) {
      this.shortFeedbackFormPartialModel.explanationNegative = !this.shortFeedbackFormPartialModel.explanationNegative;
      this.shortFeedbackFormPartialModel.explanationPositive = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.presentationNegativeText)) {
      this.shortFeedbackFormPartialModel.presentationNegative = !this.shortFeedbackFormPartialModel.presentationNegative;
      this.shortFeedbackFormPartialModel.presentationPositive = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.structureNegativeText)) {
      this.shortFeedbackFormPartialModel.structureNegative = !this.shortFeedbackFormPartialModel.structureNegative;
      this.shortFeedbackFormPartialModel.structurePositive = false;
    } else if (buttonElement.innerText.includes(this.shortFeedbackFormPartialModel.subjectsNegativeText)) {
      this.shortFeedbackFormPartialModel.subjectsNegative = !this.shortFeedbackFormPartialModel.subjectsNegative;
      this.shortFeedbackFormPartialModel.subjectsPositive = false;
    }
    this.newPartialtFeedbackEvent.emit(this.shortFeedbackFormPartialModel);
  }
}
