import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CourseService} from "../../common/services/course.service";
import {AutofillMonitor} from "@angular/cdk/text-field";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  private _courseService: CourseService;
  courseName = new FormControl('', Validators.required);
  courseForm = new FormGroup({
    courseName: this.courseName,
  });

  constructor(courseService: CourseService) {
    this._courseService = courseService;
  }

  ngOnInit(): void {
    this.courseName = new FormControl(this._courseService.getCourse(), Validators.required)
  }

  getCourse() {
    return this._courseService.getCourse();
  }
  submit() {
    this._courseService.createCourse(this.courseName.value);
  }
}
