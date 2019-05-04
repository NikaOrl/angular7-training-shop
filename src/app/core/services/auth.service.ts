import { Injectable } from '@angular/core';

import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class AuthService {
  isLoggedIn = false;

  login() {
    this.isLoggedIn = true;
  }
}
