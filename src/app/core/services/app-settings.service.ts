import { Injectable } from '@angular/core';

import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  settings = [];

  constructor(private localStorageService: LocalStorageService) {}
}
