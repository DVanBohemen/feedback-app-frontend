import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

class Score {
  private _score: number;
  private _maxScore: number;

  constructor(score: number, maxScore: number) {
    this._score = score;
    this._maxScore = maxScore;
  }

  set maxScore(value: number) {
    this._maxScore = value;
  }
  get maxScore(): number {
    return this._maxScore;
  }
  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }
}

@Injectable()
export class ScoreService extends DataService {
  private _scoreUrl = "http://localhost:7000/course/score";
  private retrievedScore: Score;

  constructor(http: HttpClient) {
    super(http);
    this.retrievedScore = new Score(0, 0);
  }

  getScore() {
    this.get<Score>(this._scoreUrl).subscribe(response => {
      this.retrievedScore = response;
      console.log("Retrieved score: " + JSON.stringify(response))
    }, error => {
      alert('Error when retrieving course score!');
      console.log(error);
    })
    return this.retrievedScore;
  }
}
