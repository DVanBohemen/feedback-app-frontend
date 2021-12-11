export abstract class StorableItemModel {
	private _storageName: string = ""

	constructor(storageName: string) {
		this._storageName = storageName;
	}

	get storageName(): string {
		return this._storageName;
	}

	set storageName(value: string) {
		this._storageName = value;
	}

	abstract load(content: string): void;
}
