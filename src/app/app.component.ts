import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.appTitle.nativeElement.textContent = 'Product shop';
  }

  login(): void {
    this.authService.login();
  }
}
