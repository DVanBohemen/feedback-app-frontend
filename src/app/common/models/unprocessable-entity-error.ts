import { AppError} from "./error.model";

export class UnprocessableEntityError extends AppError{
	private _httpStatus = 422;

	constructor() {
		super("Unprocessable entity");
	}

	get httpStatus(): number {
		return this._httpStatus;
	}

	set httpStatus(value: number) {
		this._httpStatus = value;
	}
}
