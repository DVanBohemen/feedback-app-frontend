import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';
import {Label} from '../models/label.model';
import {PostLabel} from '../models/post-labels.model';

@Injectable({
  providedIn: 'root'
})
export class CustomFeedbackService extends DataService {
  private _useCustomLabelsUrl = "http://localhost:7000/labels/use-custom";
  private _customFeedbackUrl = "http://localhost:7000/labels/custom";
  private useCustomLabels: boolean = false;
  private customLabels: Label[] = [];

  constructor(http: HttpClient) {
    super(http)
  }

  getUseCustomLabels() {
    this.get(this._useCustomLabelsUrl)
        .subscribe(response => {
          console.log("Use custom labels: " + response)
          this.useCustomLabels = Boolean(response).valueOf();
        }, error => {
          alert('Error retrieving use custom labels!');
          console.log(error);
        });
    return this.useCustomLabels
  }

  setUseCustomLabels(useCustomLabels: boolean) {
    this.put({"useCustom": useCustomLabels}, this._useCustomLabelsUrl)
        .subscribe(response => {
        console.log("Set use custom labels: " + useCustomLabels)
          this.useCustomLabels = useCustomLabels;
        }, error => {
          alert('Error when updating custom label usage!');
          console.log(error);
        });
    return useCustomLabels
  }

    postCustomLabels(customLabels: PostLabel[]) {
        this.post({"customLabels": customLabels}, this._customFeedbackUrl)
            .subscribe(response => {
              console.log("Custom labels posted: " + JSON.stringify(customLabels))
            }, error => {
              alert('Error when posting custom labels!');
              console.log(error);
            });
  }

  getCustomLabels(): Label[] {
    this.get<Label[]>(this._customFeedbackUrl)
        .subscribe(response => {
            console.log("custom labels retrieved: " + JSON.stringify(response))
          this.customLabels = response;
        }, error => {
          alert('Error when retrieving custom labels!');
          console.log(error);
        });
    return this.customLabels;
  }

    removeCustomLabels() {
        this.delete(this._customFeedbackUrl)
            .subscribe(response => {
                console.log("Removed custom labels")
                return response;
            }, error => {
                alert('Error when creating course!');
                console.log(error);
            });
    }
}
