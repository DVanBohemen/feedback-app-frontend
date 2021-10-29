export class ShortFeedbackFormGeneralModel {
  private _generalThumbsUp: boolean;
  private _generalThumbsDown: boolean;

  constructor(generalThumbsUp: boolean, generalThumbsDown: boolean) {
    this._generalThumbsUp = generalThumbsUp;
    this._generalThumbsDown = generalThumbsDown;
  }

  get generalThumbsUp(): boolean {
    return this._generalThumbsUp;
  }

  set generalThumbsUp(value: boolean) {
    this._generalThumbsUp = value;
  }

  get generalThumbsDown(): boolean {
    return this._generalThumbsDown;
  }

  set generalThumbsDown(value: boolean) {
    this._generalThumbsDown = value;
  }
}
