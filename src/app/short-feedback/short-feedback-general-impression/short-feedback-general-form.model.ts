export class ShortFeedbackFormGeneralModel {
  private _generalThumbsUp: boolean;
  private _generalThumbsUpWeight = 2;
  private _generalThumbsDown: boolean;
  private _generalThumbsDownWeight = -2;

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

  get generalThumbsUpWeight(): number {
    return this._generalThumbsUpWeight;
  }

  set generalThumbsUpWeight(value: number) {
    this._generalThumbsUpWeight = value;
  }

  get generalThumbsDown(): boolean {
    return this._generalThumbsDown;
  }

  set generalThumbsDown(value: boolean) {
    this._generalThumbsDown = value;
  }

  get generalThumbsDownWeight(): number {
    return this._generalThumbsDownWeight;
  }

  set generalThumbsDownWeight(value: number) {
    this._generalThumbsDownWeight = value;
  }
}
