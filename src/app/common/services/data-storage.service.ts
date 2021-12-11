import { Injectable } from '@angular/core';
import {Label} from '../models/label.model';
import {StorableItemModel} from '../models/storable-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  store(storableItem: StorableItemModel) {
    localStorage.setItem(storableItem.storageName, JSON.stringify(storableItem))
  }

  load<Object>(storableItem: StorableItemModel) {
    return localStorage.getItem(storableItem.storageName)
  }
}
