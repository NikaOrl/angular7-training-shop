import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductStylization]'
})
export class ProductStylizationDirective {
  @HostListener('mouseenter') onMouswEnter() {
    this.element.nativeElement.style.backgroundColor = '#eee';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }

  constructor(private element: ElementRef) {}
}
