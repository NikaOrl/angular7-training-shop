import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local-storage.service';

@Injectable({
  providedIn: CoreModule,
})
export class AppSettingsService {
  settings = [];

  constructor(
    private http: HttpClient,
    private localStogareService: LocalStorageService,
  ) {}

  loadSettings() {
    const requests = this.localStogareService.getFromLocalStorage(
      'appSettings',
    );
    if (requests) {
      this.settings = requests;
    } else {
      this.getJSON();
      this.localStogareService.saveToLocalStorage('appSettings', this.settings);
    }
  }

  private getJSON() {
    return this.http.get('.assets/app-settings.json').subscribe(
      res => {
        this.localStogareService.saveToLocalStorage(
          'appSettings',
          res['requests'],
        );
      },
      () => this.getDefaultSettings(),
    );
  }

  private getDefaultSettings() {
    this.settings = ['default settings'];
    this.localStogareService.saveToLocalStorage('appSettings', this.settings);
  }
}
