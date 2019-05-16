import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Directive, Input, Injectable } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AuthService } from './core/services/auth.service';

@Injectable()
export class AuthServiceStub {
  login() {}
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(click)': 'onClick()' },
})
class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;
  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, RouterLinkStubDirective],
      providers: [{ provide: AuthService, useValue: AuthServiceStub }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should call login() by button click`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const getUserSpy = spyOn(fixture.componentInstance, 'login');
    const de = fixture.debugElement.query(By.css('button'));
    de.nativeElement.click();
    expect(getUserSpy).toHaveBeenCalled();
  });
});
