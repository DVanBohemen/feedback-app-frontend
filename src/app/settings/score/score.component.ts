import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../../common/services/course.service';
import {ScoreService} from '../../common/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() useLabels: boolean | undefined;
  currentRate: any;
  maxRate: any;
  course: any;
  constructor(private courseService: CourseService, private scoreService: ScoreService) {}

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
    this.currentRate = this.scoreService.getScore().score;
  }
}
