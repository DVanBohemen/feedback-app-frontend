import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../common/services/course.service';
import {ApiService} from '../../api/services/api.service';
import {ScoreFeedbackModel} from '../../common/models/score-feedback.model';
import {FeedbackService} from '../../common/services/feedback.service';

@Component({
  selector: 'app-feedback-score',
  templateUrl: './feedback-score.component.html',
  styleUrls: ['./feedback-score.component.css']
})
export class FeedbackScoreComponent implements OnInit {
  course: string | undefined;
  score: number | undefined;

  feedbackScore = new FormControl('', Validators.required);
  feedbackName = new FormControl('', Validators.required);
  feedbackComment = new FormControl('');
  feedbackForm = new FormGroup({
    feedbackScore: this.feedbackScore,
    feedbackName: this.feedbackName,
    feedbackComment: this.feedbackComment,
  });

  constructor(private courseService: CourseService, private feedbackService: FeedbackService,
              private apiService: ApiService ) { }

  ngOnInit(): void {
    this.course = this.courseService.getCourse()
  }

  public submit() {
    let response = this.apiService.postCourseFeedbackCourseFeedbackPost({ body: new ScoreFeedbackModel(this.feedbackForm.value.feedbackName,
        parseInt(this.feedbackForm.value.feedbackScore), this.feedbackForm.value.feedbackComment)}).subscribe(response => {
      alert("Feedback successfully posted")
    }, error => {
      alert('Error when posting feedback!');
      console.log({ body: new ScoreFeedbackModel(this.feedbackForm.value.feedbackName,
            parseInt(this.feedbackForm.value.feedbackScore), this.feedbackForm.value.feedbackComment)});
    });
  }

}
