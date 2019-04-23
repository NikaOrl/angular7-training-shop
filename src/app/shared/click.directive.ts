import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  constructor(private el: ElementRef, private render: Renderer2) {}
  @Input('appClick') size: string;

  @HostListener('pointerdown', ['$event'])
  public onPointerEnter(event: PointerEvent): void {
    this.highlight(this.size + 'px' || '20px');
  }

  @HostListener('pointerup', ['$event'])
  public onPointerUp(event: PointerEvent): void {
    this.highlight('16px');
  }

  private highlight(size: string) {
    this.render.setStyle(this.el.nativeElement, 'font-size', size);
  }
}
