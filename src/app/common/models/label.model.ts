export class Label {
	private _name: string;
	private _positive: boolean;
	private _weight: number;

	constructor(_name: string, _positive: boolean, _weight: number) {
		this._name = _name;
		this._positive = _positive;
		this._weight = _weight;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get positive(): boolean {
		return this._positive;
	}

	set positive(value: boolean) {
		this._positive = value;
	}

	get weight(): number {
		return this._weight;
	}

	set weight(value: number) {
		this._weight = value;
	}
}
