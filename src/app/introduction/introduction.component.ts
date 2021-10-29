import { Component, OnInit } from '@angular/core';
import {CourseRetrievalService} from "../shared/services/course-retrieval.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  public course: string;

  constructor(courseService: CourseRetrievalService) {
    this.course = courseService.getCourse();
  }

  ngOnInit(): void {
  }

}
