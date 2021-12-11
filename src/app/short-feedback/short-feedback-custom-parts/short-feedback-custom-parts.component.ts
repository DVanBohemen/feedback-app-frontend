import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ShortFeedbackFormPartialModel} from '../short-feedback-parts/short-feedback-form-partial.model';
import {CustomFeedbackFormModel} from '../../common/models/short-feedback-form-custom-feedback.model';
import {CustomFeedbackService} from '../../common/services/custom-feedback.service';
import {Label} from '../../common/models/label.model';
import {CustomFeedbackLabel} from '../../common/models/custom-feedback-label.model';


@Component({
  selector: 'app-short-feedback-custom-parts',
  templateUrl: './short-feedback-custom-parts.component.html',
  styleUrls: ['./short-feedback-custom-parts.component.css']
})
export class ShortFeedbackCustomPartsComponent implements OnInit {
  @Output() newCustomFeedbackEvent = new EventEmitter<CustomFeedbackLabel[]>();
  private _customFeedbackService: CustomFeedbackService;
  private _customFeedbackLabels: CustomFeedbackLabel[] = [];
  private _labels: Label[] = [];

  constructor(customFeedbackService: CustomFeedbackService) {
    this._customFeedbackService = customFeedbackService;
  }

  ngOnInit(): void {
    this._labels = this._customFeedbackService.getCustomLabels()
    for (const customLabel of this._labels) {
      this._customFeedbackLabels.push(new CustomFeedbackLabel(false, customLabel.name, customLabel.positive, customLabel.weight))
    }
  }

  onSelectCustomUp(buttonElement: HTMLButtonElement, label: CustomFeedbackLabel): void {
    label.selected = !label.selected;
    this.newCustomFeedbackEvent.emit(this._customFeedbackLabels);
  }

  getLabels(): Label[] {
    return this._labels;
  }

  getCustomFeedbackLabels(): CustomFeedbackLabel[] {
    return this._customFeedbackLabels
  }

}
