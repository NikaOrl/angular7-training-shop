import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule,
})
export class LocalStorageService {
  constructor() {}

  setItem(key, value) {
    localStorage.setItem(key, value);
  }

  getItem(key) {
    localStorage.getItem(key);
  }

  removeItem(key) {
    localStorage.removeItem(key);
  }
}
