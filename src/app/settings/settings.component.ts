import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FeedbackService} from "../common/services/feedback.service";
import {CustomFeedbackService} from '../common/services/custom-feedback.service';
import {FeatureFlagsService} from '../common/services/feature-flags.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  customLabelsEnabled: boolean;
  private _useLabelsFeature: boolean | undefined;
  private _featureService: FeatureFlagsService;

  constructor(private feedbackService: CustomFeedbackService, featureService: FeatureFlagsService) {
    this.customLabelsEnabled = false;
    this._featureService = featureService;
  }

  ngOnInit(): void {
    if (this.useLabelsFeature()) {
      this.customLabelsEnabled = this.feedbackService.getUseCustomLabels();
      this._useLabelsFeature = this._featureService.isFeatureFlagEnabled("useLabels")
      console.log(this.useLabelsFeature())
    }
  }

  useLabelsFeature() {
    return this._useLabelsFeature;
  }

  onChecked(toggle: MatSlideToggle): void {
    this.customLabelsEnabled = toggle.checked;
    this.feedbackService.setUseCustomLabels(this.customLabelsEnabled);
  }
}
