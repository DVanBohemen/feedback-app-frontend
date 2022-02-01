import {FeedbackForm} from '../../api/models/feedback-form';

export class ScoreFeedbackModel implements FeedbackForm {
	comment: string;
	name: string;
	score: number;

	constructor(name: string, score: number, comment: string) {
		this.name = name;
		this.score = score;
		this.comment = comment;
	}
}