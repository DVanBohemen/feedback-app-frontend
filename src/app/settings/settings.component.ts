import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSlideToggle} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  customLabelsEnabled: boolean;

  constructor() {
    this.customLabelsEnabled = false;
  }

  ngOnInit(): void {

  }

  onChecked(toggle: MatSlideToggle): void {
    // this.events.nativeElement.innerHTML = this.label[buttonNumber] + ': Unchecked';
    this.customLabelsEnabled = toggle.checked;
  }
}
