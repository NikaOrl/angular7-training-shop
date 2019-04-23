import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('appTitle') appTitle: ElementRef;

  ngOnInit() {
    this.appTitle.nativeElement.textContent = 'Product shop';
  }
}
