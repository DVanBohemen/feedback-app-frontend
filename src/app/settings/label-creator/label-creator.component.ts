import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {FeedbackService} from "../../common/services/feedback.service";

class Label {
  private _name: string;
  private _positive: boolean;
  private _index: number;

  constructor(name: string, positive: boolean, index: number) {
    this._name = name;
    this._positive = positive;
    this._index = index;
  }

  get index(): number {
    return this._index;
  }
  get positive(): boolean {
    return this._positive;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
}

@Component({
  selector: 'app-label-creator',
  templateUrl: './label-creator.component.html',
  styleUrls: ['./label-creator.component.css']
})
export class LabelCreatorComponent implements OnInit {
  labelFormGroup: FormGroup;
  labels: any[];
  labelModels: Label[];
  positive = true;
  useLabels: any[];

  constructor(private _formBuilder: FormBuilder, private feedbackService: FeedbackService) {
    this.labelFormGroup = this._formBuilder.group({
      labelName: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
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
  }

  ngOnInit(): void {
  }

  setPositive(): void {
    this.positive = true;
  }

  setNegative(): void {
    this.positive = false;
  }

  addLabel(): void {
    this.labelModels.push(new Label(this.labelFormGroup.get('labelName')?.value, this.positive, 1));
    this.labels.push(this.labelFormGroup.get('labelName')?.value)
  }

  removeLabel() {
    this.labelModels = this.labelModels.filter(name => !this.labelFormGroup.get('labelName')?.value);
  }

  submitLabels() {
    this.feedbackService
  }
}
