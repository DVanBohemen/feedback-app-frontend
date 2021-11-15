class Course {
  private _courseName: string;

  constructor(name: string) {
    this._courseName = name;
  }

  get courseName(): string {
    return this._courseName;
  }

  set courseName(value: string) {
    this._courseName = value;
  }
}
