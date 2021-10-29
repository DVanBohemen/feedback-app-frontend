import { Component, OnInit } from '@angular/core';
import {ShortFeedbackFormGeneralModel} from "./short-feedback-general-form.model";
import {style} from "@angular/animations";

@Component({
  selector: 'app-short-feedback-general-impression',
  templateUrl: './short-feedback-general-impression.component.html',
  styleUrls: ['./short-feedback-general-impression.component.css']
})
  export class ShortFeedbackGeneralImpressionComponent implements OnInit {
  shortFeedbackFormGeneral: ShortFeedbackFormGeneralModel;

  constructor() {
    this.shortFeedbackFormGeneral = new ShortFeedbackFormGeneralModel(false, false);
  }

  ngOnInit(): void {
  }

  onSelectGeneralThumbUp($event: Event): void {
    if (!this.shortFeedbackFormGeneral.generalThumbsUp) {
      this.shortFeedbackFormGeneral.generalThumbsUp = true;
      this.shortFeedbackFormGeneral.generalThumbsDown = false;
    } else {
      this.shortFeedbackFormGeneral.generalThumbsUp = false;
    }
  }

  onSelectGeneralThumbDown($event: Event): void {
    if (!this.shortFeedbackFormGeneral.generalThumbsDown) {
      this.shortFeedbackFormGeneral.generalThumbsDown = true;
      this.shortFeedbackFormGeneral.generalThumbsUp = false;
    } else {
      this.shortFeedbackFormGeneral.generalThumbsDown = false;
    }
    $event.stopPropagation();
  }

}
