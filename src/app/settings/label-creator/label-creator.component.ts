import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {CustomFeedbackService} from '../../common/services/custom-feedback.service';
import {Label} from '../../common/models/label.model';
import {elementAt} from 'rxjs/operators';
import {PostLabel} from '../../common/models/post-labels.model';

@Component({
  selector: 'app-label-creator',
  templateUrl: './label-creator.component.html',
  styleUrls: ['./label-creator.component.css']
})
export class LabelCreatorComponent implements OnInit {
  labelFormGroup: FormGroup;
  labels: string[];
  labelModels: Label[];
  positive = true;
  useLabels: any[];

  constructor(private _formBuilder: FormBuilder, private feedbackService: CustomFeedbackService) {
    this.labelFormGroup = this._formBuilder.group({
      labelName: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
      labelWeight: new FormControl('', [
        Validators.required,
      ])
      })
    this.labels = [];
    this.useLabels = [];
    this.labelModels = [];
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    this.submitLabels()
  }

  ngOnInit(): void {
    this.labelModels = this.feedbackService.getCustomLabels();
    for (let labelModel of this.labelModels) {
      this.useLabels.push(labelModel.name)
    }
  }

  setPositive(): void {
    this.positive = true;
  }

  setNegative(): void {
    this.positive = false;
  }

  addLabel(): void {
    if (this.labelFormGroup.get('labelName')?.value.length > 2 && (this.labelFormGroup.get('labelWeight')?.value < 0 || this.labelFormGroup.get('labelWeight')?.value > 0)) {
      console.log(this.labelFormGroup.get('labelWeight')?.value)
      this.labelModels.push(new Label(this.labelFormGroup.get('labelName')?.value, this.positive, this.labelFormGroup.get('labelWeight')?.value));
      this.labels.push(this.labelFormGroup.get('labelName')?.value)
    }
  }

  submitLabels() {
    let labelsToSubmit: PostLabel[] = [];
    for (let labelName of this.useLabels) {
      let labelModel = this.labelModels.find(label => label.name === labelName);
      if (labelModel !== undefined) {
        labelsToSubmit.push(new PostLabel(labelModel.name, labelModel.positive, labelModel.weight))
      }
    }
    if(labelsToSubmit.length > 0) {
      this.feedbackService.postCustomLabels(labelsToSubmit)
    } else {
     this.feedbackService.removeCustomLabels()
    }
  }
}
