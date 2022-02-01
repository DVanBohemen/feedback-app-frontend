import {AfterContentInit, AfterViewInit, Component, OnInit} from '@angular/core';
import {CourseService} from "../common/services/course.service";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  course: string;
  private courseService: CourseService;

  constructor(courseService: CourseService) {
    this.courseService = courseService;
    this.course = courseService.getCourse();
  }

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
  }
}
