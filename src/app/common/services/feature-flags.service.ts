import {RuntimeConfigLoaderService} from 'runtime-config-loader';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FeatureFlagsService {
	private featureFlags: any;
	constructor(private _config: RuntimeConfigLoaderService) {
		this.featureFlags =
			this._config.getConfigObjectKey("featureFlags");
	}

	isFeatureFlagEnabled(flag: string) {
		return this.featureFlags && this.featureFlags[flag];
	}
}