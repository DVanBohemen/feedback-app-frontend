import {StorableItemModel} from './storable-item.model';

export class Course extends StorableItemModel{
  private _courseName: string;

  constructor(name: string) {
    super("course");
    this._courseName = name;
  }

  get courseName(): string {
    return this._courseName;
  }

  set courseName(value: string) {
    this._courseName = value;
  }

  load(content: string): void {
  }
}
