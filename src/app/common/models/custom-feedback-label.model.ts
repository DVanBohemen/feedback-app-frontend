import {Label} from './label.model';

export class CustomFeedbackLabel extends Label{
	private _selected: boolean;

	constructor(selected: boolean, name: string, positive: boolean, weight: number) {
		super(name, positive, weight);
		this._selected = selected;
	}

	get selected(): boolean {
		return this._selected;
	}

	set selected(value: boolean) {
		this._selected = value;
	}
}
