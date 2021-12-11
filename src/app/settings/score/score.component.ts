import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../common/services/course.service';
import {ScoreService} from '../../common/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  currentRate: any;
  maxRate: any;
  course: string;
  constructor(private courseService: CourseService, private scoreService: ScoreService) {
    this.course = courseService.getCourse();
    this.currentRate = this.scoreService.getScore().score;
    this.maxRate = this.scoreService.getScore().maxScore;
  }

  ngOnInit(): void {

  }

}
