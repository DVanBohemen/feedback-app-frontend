export class AppError {
  private _message;

  constructor(message: string) {
    this._message = message;
  }

  get message() {
    return this._message;
  }

  set message(value) {
    this._message = value;
  }
}
