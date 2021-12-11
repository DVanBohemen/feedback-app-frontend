import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {FeedbackService} from "../common/services/feedback.service";
import {CustomFeedbackService} from '../common/services/custom-feedback.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  customLabelsEnabled: boolean;

  constructor(private feedbackService: CustomFeedbackService) {
    this.customLabelsEnabled = false;
  }

  ngOnInit(): void {
    this.customLabelsEnabled = this.feedbackService.getUseCustomLabels();
  }

  onChecked(toggle: MatSlideToggle): void {
    this.customLabelsEnabled = toggle.checked;
    this.feedbackService.setUseCustomLabels(this.customLabelsEnabled);
  }
}
