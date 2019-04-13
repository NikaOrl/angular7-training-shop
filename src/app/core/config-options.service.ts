import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';

@Injectable({
  providedIn: CoreModule,
})
export class ConfigOptionsService {
  private settingsObj = {
    id: 0,
    login: 'login',
    email: 'email',
  };
  get settings() {
    return this.settingsObj;
  }

  set settings(settingsObj) {
    for (const key in settingsObj) {
      if (key && this.settingsObj[key]) {
        this.settingsObj[key] = settingsObj[key];
      }
    }
  }
  constructor() {}
}
