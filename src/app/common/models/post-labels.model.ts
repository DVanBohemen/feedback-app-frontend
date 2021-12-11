export class PostLabel {
	private name: string;
	private positive: boolean;
	private weight: number;

	constructor(_name: string, _positive: boolean, _weight: number) {
		this.name = _name;
		this.positive = _positive;
		this.weight = _weight;
	}

	get getPositive(): boolean {
		return this.positive;
	}
	set setName(value: string) {
		this.name = value;
	}

	get getName(): string {
		return this.name;
	}

	set setWeight(value: number) {
		this.weight = value;
	}

}
