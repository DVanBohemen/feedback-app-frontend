export class ShortFeedbackFormPartialModel {

  private _structurePositive: boolean;
  private _structurePositiveText = "Structuur van de sessies";
  private _structureNegative: boolean;
  private _structureNegativeText = "Structuur van de sessies";
  private _presentationPositive: boolean;
  private _presentationPositiveText = "Goede presentaties";
  private _presentationNegative: boolean;
  private _presentationNegativeText = "Presentatie";
  private _subjectsPositive: boolean;
  private _subjectsPositiveText = "Besproken onderwerpen";
  private _subjectsNegative: boolean;
  private _subjectsNegativeText = "Besproken onderwerpen";
  private _explanationPositive: boolean;
  private _explanationPositiveText = "Duidelijke uitleg";
  private _explanationNegative: boolean;
  private _explanationNegativeText = "Uitleg kon beter";

  constructor(structurePositive: boolean, structureNegative: boolean, presentationPositive: boolean, presentationNegative:
                boolean, subjectsPositive: boolean, subjectsNegative: boolean, ExplanationPositive:
                boolean, ExplanationNegative: boolean) {
    this._structurePositive = structurePositive;
    this._structureNegative = structureNegative;
    this._presentationPositive = presentationPositive;
    this._presentationNegative = presentationNegative;
    this._subjectsPositive = subjectsPositive;
    this._subjectsNegative = subjectsNegative;
    this._explanationPositive = ExplanationPositive;
    this._explanationNegative = ExplanationNegative;
  }
  get structurePositive(): boolean {
    return this._structurePositive;
  }

  set structurePositive(value: boolean) {
    this._structurePositive = value;
  }

  get structureNegative(): boolean {
    return this._structureNegative;
  }

  set structureNegative(value: boolean) {
    this._structureNegative = value;
  }

  get presentationPositive(): boolean {
    return this._presentationPositive;
  }

  set presentationPositive(value: boolean) {
    this._presentationPositive = value;
  }

  get presentationNegative(): boolean {
    return this._presentationNegative;
  }

  set presentationNegative(value: boolean) {
    this._presentationNegative = value;
  }

  get subjectsPositive(): boolean {
    return this._subjectsPositive;
  }

  set subjectsPositive(value: boolean) {
    this._subjectsPositive = value;
  }

  get subjectsNegative(): boolean {
    return this._subjectsNegative;
  }

  set subjectsNegative(value: boolean) {
    this._subjectsNegative = value;
  }

  get explanationPositive(): boolean {
    return this._explanationPositive;
  }

  set explanationPositive(value: boolean) {
    this._explanationPositive = value;
  }

  get explanationNegative(): boolean {
    return this._explanationNegative;
  }

  set explanationNegative(value: boolean) {
    this._explanationNegative = value;
  }
  set explanationNegativeText(value: string) {
    this._explanationNegativeText = value;
  }

  set explanationPositiveText(value: string) {
    this._explanationPositiveText = value;
  }

  set subjectsNegativeText(value: string) {
    this._subjectsNegativeText = value;
  }

  set subjectsPositiveText(value: string) {
    this._subjectsPositiveText = value;
  }

  set presentationNegativeText(value: string) {
    this._presentationNegativeText = value;
  }

  set presentationPositiveText(value: string) {
    this._presentationPositiveText = value;
  }

  set structurePositiveText(value: string) {
    this._structurePositiveText = value;
  }
  get subjectsNegativeText(): string {
    return this._subjectsNegativeText;
  }
  get subjectsPositiveText(): string {
    return this._subjectsPositiveText;
  }
  get presentationNegativeText(): string {
    return this._presentationNegativeText;
  }
  get presentationPositiveText(): string {
    return this._presentationPositiveText;
  }
  get structurePositiveText(): string {
    return this._structurePositiveText;
  }
  get explanationPositiveText(): string {
    return this._explanationPositiveText;
  }
  get structureNegativeText(): string {
    return this._structureNegativeText;
  }

  set structureNegativeText(value: string) {
    this._structureNegativeText = value;
  }
  get explanationNegativeText(): string {
    return this._explanationNegativeText;
  }
}
