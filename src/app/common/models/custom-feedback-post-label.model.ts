import {Label} from './label.model';
import {PostCustomLabelModel} from './post-custom-label.model';

export class CustomFeedbackPostLabelModel extends PostCustomLabelModel{
	private selected: boolean;

	constructor(selected: boolean, name: string, positive: boolean, weight: number) {
		super(name, positive, weight);
		this.selected = selected;
	}

	get getSelected(): boolean {
		return this.selected;
	}

	set setSelected(value: boolean) {
		this.selected = value;
	}
}
