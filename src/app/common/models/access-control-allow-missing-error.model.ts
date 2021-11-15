import { AppError} from "./error.model";

export class AccessControlAllowMissingError extends AppError{
  private _httpStatus = 307;

  constructor() {
    super("No Access control allow origin header is present");
  }

  get httpStatus(): number {
    return this._httpStatus;
  }

  set httpStatus(value: number) {
    this._httpStatus = value;
  }
}
