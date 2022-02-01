import { Injectable } from '@angular/core';
import {StorableItemModel} from '../models/storable-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  store(storableItem: StorableItemModel) {
    localStorage.setItem(storableItem.storageName, JSON.stringify(storableItem))
  }

  load<Object>(storageName: string) {
    return localStorage.getItem(storageName)
  }
}
