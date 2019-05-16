import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';

import { CoreModule } from '../core.module';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: CoreModule,
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanActivateGuard is called');
    return this.checkLogin();
  }

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    console.log('CanLoad Guard is called');
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return false;
  }
}
