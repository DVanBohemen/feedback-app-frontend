import { AppError} from "./error.model";

export class NotFoundError extends AppError{
  private _httpStatus = 404;

  constructor() {
    super("Not found error");
  }

  get httpStatus(): number {
    return this._httpStatus;
  }

  set httpStatus(value: number) {
    this._httpStatus = value;
  }
}
